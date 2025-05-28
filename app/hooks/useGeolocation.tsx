import { useEffect, useState } from "react";
import {
  GeolocationErrorCode,
  type GeolocationError,
} from "~/types/GeolocationError";
import { getPosition } from "~/utils/functions";
import { geolocationErrorUserFriendlyMessages } from "~/utils/geolocationErrorMessages";

export const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | undefined>();
  const [error, setError] = useState<GeolocationError | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const createGeolocationError = (
    error: GeolocationPositionError | Error | unknown,
  ): GeolocationError => {
    if (error instanceof GeolocationPositionError) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          return {
            code: GeolocationErrorCode.PERMISSION_DENIED,
            message: error.message,
            userFriendlyMessage:
              geolocationErrorUserFriendlyMessages[
                GeolocationErrorCode.PERMISSION_DENIED
              ],
            canRetry: true,
          };
        case error.POSITION_UNAVAILABLE:
          return {
            code: GeolocationErrorCode.POSITION_UNAVAILABLE,
            message: error.message,
            userFriendlyMessage:
              geolocationErrorUserFriendlyMessages[
                GeolocationErrorCode.POSITION_UNAVAILABLE
              ],
            canRetry: true,
          };
        case error.TIMEOUT:
          return {
            code: GeolocationErrorCode.TIMEOUT,
            message: error.message,
            userFriendlyMessage:
              geolocationErrorUserFriendlyMessages[
                GeolocationErrorCode.TIMEOUT
              ],
            canRetry: true,
          };
        default:
          return {
            code: GeolocationErrorCode.UNKNOWN,
            message: error.message,
            userFriendlyMessage:
              geolocationErrorUserFriendlyMessages[
                GeolocationErrorCode.UNKNOWN
              ],
            canRetry: true,
          };
      }
    }

    if (error instanceof Error && error.message.includes("not supported")) {
      return {
        code: GeolocationErrorCode.NOT_SUPPORTED,
        message: error.message,
        userFriendlyMessage:
          geolocationErrorUserFriendlyMessages[
            GeolocationErrorCode.NOT_SUPPORTED
          ],
        canRetry: false,
      };
    }

    return {
      code: GeolocationErrorCode.UNKNOWN,
      message: error instanceof Error ? error.message : "Unknown error",
      userFriendlyMessage:
        geolocationErrorUserFriendlyMessages[GeolocationErrorCode.UNKNOWN],
      canRetry: true,
    };
  };

  const loadGeolocation = async () => {
    setError(undefined);
    setIsLoading(true);

    try {
      const currentPosition = await getPosition();
      setPosition(currentPosition);
      setError(undefined);
    } catch (err) {
      const geolocationError = createGeolocationError(err);
      setError(geolocationError);
      console.error("Geolocation error:", geolocationError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGeolocation();
  }, []);

  return {
    position,
    loadGeolocation,
    error,
    isLoading,
    canRetry: error?.canRetry ?? true,
  };
};
