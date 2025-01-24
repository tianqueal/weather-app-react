import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import type { ForecastOneDay } from "~/types/forecast-one-day";
import { getPosition } from "~/utils";

export default function Today() {
  const [position, setPosition] = useState<GeolocationPosition | undefined>();
  const [weather, setWeather] = useState<ForecastOneDay>();
  const [lastUpdated, setLastUpdated] = useState<Date>();
  const [isDisabled, setIsDisabled] = useState(false);

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
    } catch (error) {
      alert("Failed to fetch weather data");
    }
  };

  const handleUpdate = () => {
    if (isDisabled) return;

    if (!position?.coords?.latitude || !position?.coords?.longitude)
      return alert("No coordinates found");

    fetchWeather(position.coords.latitude, position.coords.longitude);
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 10000);
  };

  const init = async () => {
    try {
      let position: GeolocationPosition | undefined;

      try {
        const storageCoords = localStorage.getItem("position");
        if (!storageCoords) throw new Error("No coordinates found");

        position = JSON.parse(storageCoords) as GeolocationPosition;

        if (!position?.coords?.latitude || !position?.coords?.longitude)
          throw new Error("Invalid coordinates");
      } catch (error) {}

      if (!position?.coords?.latitude || !position?.coords?.longitude) {
        if (!navigator.geolocation)
          throw new Error("Geolocation is not supported");

        position = await getPosition();
      }

      if (!position?.coords?.latitude || !position?.coords?.longitude)
        throw new Error("Invalid coordinates");

      setPosition(position);
      fetchWeather(position.coords.latitude, position.coords.longitude);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <main className="flex items-center justify-center pb-4 pt-16">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-16">
        <h1 className="text-4xl font-bold">
          {position?.coords.latitude && position?.coords.longitude
            ? `${position?.coords.latitude}, ${position?.coords.longitude}`
            : "---, ---"}
        </h1>
        <h2 className="text-5xl">
          {weather?.current ? (
            `${weather.current.temperature_2m}${weather.current_units.temperature_2m}`
          ) : (
            <ArrowPathIcon className="size-12 animate-spin" />
          )}
        </h2>
        <section className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleUpdate}
            disabled={isDisabled}
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:bg-gray-300 dark:hover:bg-gray-900"
          >
            <ArrowPathIcon className="size-8" />
            <span>Update</span>
          </button>
          {lastUpdated && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated:{" "}
              {lastUpdated.toLocaleTimeString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
