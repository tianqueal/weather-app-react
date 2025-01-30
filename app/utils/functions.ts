import { weatherGradients } from "./weatherGradients";

export const getPosition = (
  options?: PositionOptions,
): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options),
  );

export const getWeatherGradient = (
  weatherCode: number,
  isDay: boolean,
): { gradient: string; textColor: string } => {
  const weather = weatherGradients.get(weatherCode);

  if (!weather) return { gradient: "", textColor: "" };

  const time = isDay ? "day" : "night";

  return {
    gradient: weather.gradient[time],
    textColor: weather.textColor[time],
  };
};
