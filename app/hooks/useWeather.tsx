import { useEffect, useState } from "react";
import type { ForecastOneDay } from "~/types/ForecastOneDay";
import type { ReverseGeocodeResponse } from "~/types/ReverseGeocodeResponse";
import { weatherDescriptions } from "~/utils/weatherDescriptions";
import { getWeatherGradient } from "~/utils/functions";
import { FahrenheitCountries } from "~/constants/temperature";

export const useWeather = (position: GeolocationPosition | undefined) => {
  const [weather, setWeather] = useState<ForecastOneDay | null>(null);
  const [reverseGeocode, setReverseGeocode] =
    useState<ReverseGeocodeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      const userLocale = navigator.language.split("-").pop()?.toUpperCase();
      const isFahrenheit = userLocale && FahrenheitCountries.has(userLocale);

      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current:
          "temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code",
        forecast_days: "1",
        ...(isFahrenheit && { temperature_unit: "fahrenheit" }),
      });

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?${params}`,
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data: ForecastOneDay = await response.json();
      setWeather(data);
      setLastUpdated(new Date());
    } catch {
      setError("Failed to fetch weather data");
    }
  };

  const fetchReverseGeocode = async (latitude: number, longitude: number) => {
    try {
      const params = new URLSearchParams({
        lat: latitude.toString(),
        lon: longitude.toString(),
        format: "json",
      });

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?${params}`,
      );
      if (!response.ok) throw new Error("Failed to fetch reverse geocode data");

      const data: ReverseGeocodeResponse = await response.json();
      setReverseGeocode(data);
    } catch {
      setError("Failed to fetch reverse geocode data");
    }
  };

  const loadWeatherData = () => {
    if (!position) return;

    const { latitude, longitude } = position.coords;
    fetchWeather(latitude, longitude);
    fetchReverseGeocode(latitude, longitude);
  };

  useEffect(() => {
    loadWeatherData();
  }, [position]);

  return {
    weather,
    reverseGeocode,
    lastUpdated,
    weatherDescription: weather
      ? weatherDescriptions.get(weather.current.weather_code)
      : null,
    weatherGradient: weather
      ? getWeatherGradient(
          weather.current.weather_code,
          Boolean(weather.current.is_day),
        )
      : null,
    loadWeatherData,
    error,
  };
};
