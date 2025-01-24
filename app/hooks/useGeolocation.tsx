import { useEffect, useState } from "react";
import { getPosition } from "~/utils/functions";

export const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | undefined>();
  const [error, setError] = useState<string | undefined>();

  const loadGeolocation = async () => {
    setError(undefined);

    try {
      const currentPosition = await getPosition();
      setPosition(currentPosition);
    } catch {
      setError("Geolocation is not allowed");
    }
  };

  useEffect(() => {
    loadGeolocation();
  }, []);

  return { position, loadGeolocation, error };
};
