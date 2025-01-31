import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/16/solid";
import { useGeolocation } from "~/hooks/useGeolocation";
import { useWeather } from "~/hooks/useWeather";

export default function Today() {
  const { position, loadGeolocation, error: geoError } = useGeolocation();
  const {
    weather,
    reverseGeocode,
    lastUpdated,
    weatherDescription,
    weatherGradient,
    error: weatherError,
  } = useWeather(position);

  const handleUpdate = async () => {
    const now = new Date();

    if (lastUpdated && now.getTime() - lastUpdated.getTime() < 10000) return;

    await loadGeolocation();
  };

  const renderLocation = () => {
    if (reverseGeocode?.address) {
      const { city, town, county, province, country } = reverseGeocode.address;
      return city || town || county || province || country;
    }
    return `${position?.coords.latitude ?? "---"}, ${position?.coords.longitude ?? "---"}`;
  };

  return (
    <main
      className={`${weatherGradient ? `${weatherGradient.gradient} ${weatherGradient.textColor}` : ""} flex h-screen items-start justify-center bg-gradient-to-b pb-4 pl-4 pr-4 pt-16 transition-colors`}
    >
      <div className="flex h-full min-h-0 flex-1 flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold">{renderLocation()}</h1>
        <section className="flex h-full flex-1 flex-col items-center gap-4">
          <h2 className="relative text-7xl font-extralight">
            {weather?.current ? (
              <span className="after:absolute after:content-['°']">
                {weather.current.temperature_2m.toFixed(0)}
              </span>
            ) : weatherError || geoError ? (
              <ExclamationTriangleIcon className="size-12" />
            ) : (
              <ArrowPathIcon className="size-12 animate-spin" />
            )}
          </h2>
          <p className="text-xl opacity-80">{weatherDescription ?? ""}</p>
        </section>
        <section className="flex flex-col items-center gap-4">
          <button
            onClick={handleUpdate}
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          >
            <ArrowPathIcon className="size-6" />
            Update Weather
          </button>
          {lastUpdated && (
            <p className="text-center text-sm">
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
