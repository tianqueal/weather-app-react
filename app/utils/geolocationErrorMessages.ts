import { GeolocationErrorCode } from "~/types/GeolocationError";

// export const geolocationErrorMessages: Record<GeolocationErrorCode, string> = {
//   [GeolocationErrorCode.PERMISSION_DENIED]:
//     "Permission to access location was denied.",
//   [GeolocationErrorCode.POSITION_UNAVAILABLE]:
//     "Location information is unavailable.",
//   [GeolocationErrorCode.TIMEOUT]: "The request to get user location timed out.",
//   [GeolocationErrorCode.NOT_SUPPORTED]:
//     "Geolocation is not supported by this browser.",
//   [GeolocationErrorCode.UNKNOWN]:
//     "An unknown error occurred while trying to access location.",
// };

export const geolocationErrorUserFriendlyMessages: Record<
  GeolocationErrorCode,
  string
> = {
  [GeolocationErrorCode.PERMISSION_DENIED]:
    "Location access was denied. Please enable location services in your browser settings.",
  [GeolocationErrorCode.POSITION_UNAVAILABLE]:
    "Your location couldn't be determined. Check your internet connection and try again.",
  [GeolocationErrorCode.TIMEOUT]:
    "Location request timed out. Please try again.",
  [GeolocationErrorCode.NOT_SUPPORTED]:
    "Your browser does not support geolocation. Please try a different browser.",
  [GeolocationErrorCode.UNKNOWN]:
    "An unexpected error occurred while getting your location.",
};
