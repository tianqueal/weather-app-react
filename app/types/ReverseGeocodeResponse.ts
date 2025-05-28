export interface ReverseGeocodeResponse {
  place_id?: number;
  licence?: string;
  osm_type?: string;
  osm_id?: number;
  lat?: string;
  lon?: string;
  class?: string;
  type?: string;
  place_rank?: number;
  importance?: number;
  addresstype?: string;
  name?: string;
  display_name?: string;
  address?: Address;
  boundingbox?: string[];
  error?: string;
}

export interface Address {
  road?: string;
  neighbourhood: string;
  hamlet?: string;
  civil_parish?: string;
  quarter?: string;
  town?: string;
  city?: string;
  county?: string;
  province?: string;
  "ISO3166-2-lvl6"?: string;
  state?: string;
  "ISO3166-2-lvl4"?: string;
  postcode: string;
  country: string;
  country_code: string;
}
