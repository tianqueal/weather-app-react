import { useEffect, useState } from "react";
import type { ForecastOneDay } from "~/types/forecast-one-day";
import type { ReverseGeocodingResponse } from "~/types/reverse-geocoding-response";
import { weatherDescriptions } from "~/utils/weather-descriptions";
import { weatherGradients } from "~/utils/weather-gradients";

export const useWeather = (position: GeolocationPosition | undefined) => {
  const [weather, setWeather] = useState<ForecastOneDay | null>(null);
  const [reverseGeocode, setReverseGeocode] =
    useState<ReverseGeocodingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current:
          "temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code",
        forecast_days: "1",
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

      const data: ReverseGeocodingResponse = await response.json();
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
      ? weatherGradients.get(weather.current.weather_code)
      : null,
    loadWeatherData,
    error,
  };
};
