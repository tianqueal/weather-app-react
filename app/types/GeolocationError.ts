export enum GeolocationErrorCode {
  PERMISSION_DENIED = "PERMISSION_DENIED",
  POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE",
  TIMEOUT = "TIMEOUT",
  NOT_SUPPORTED = "NOT_SUPPORTED",
  UNKNOWN = "UNKNOWN",
}

export interface GeolocationError {
  code: GeolocationErrorCode;
  message: string;
  userFriendlyMessage: string;
  canRetry: boolean;
}
