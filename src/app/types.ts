export type Term = string;
export type LocationType = 'station'
| 'airport'
| 'bus_station'
| 'city'
| 'autonomous_territory'
| 'subdivision'
| 'country'
| 'region'
| 'continent'
export interface Region {
    id: string;
    name: string;
    slug: string;
}

export interface Country {
    id: string;
    name: string;
    slug: string;
    code: string;
}

export interface Continent {
    id: string;
    name: string;
    slug: string;
    code: string;
}

export interface Subdivision {
    id: string;
    name: string;
    slug: string;
    code: string;
}

export interface City {
    id: string;
    name: string;
    code: string;
    slug: string;
    region: Region;
    autonomous_territory?: any;
    country: Country;
    continent: Continent;
    subdivision: Subdivision;
    nearby_country?: any;
}

export interface Location2 {
    lat: number;
    lon: number;
}

export interface AlternativeDeparturePoint {
    id: string;
    distance: number;
    duration: number;
}

export interface Tag {
    tag: string;
    month_to: number;
    month_from: number;
}

export interface Special {
    id: string;
    name: string;
    slug: string;
}

export interface TouristRegion {
    id: string;
    name: string;
    slug: string;
}

export interface CarRental {
    provider_id: number;
    providers_locations: string[];
}

export interface Location {
    id: string;
    int_id: number;
    airport_int_id: number;
    active: boolean;
    code: string;
    icao: string;
    name: string;
    slug: string;
    slug_en: string;
    alternative_names: string[];
    rank: number;
    global_rank_dst: number;
    dst_popularity_score: number;
    timezone: string;
    city: City;
    location: Location2;
    alternative_departure_points: AlternativeDeparturePoint[];
    tags: Tag[];
    providers: number[];
    special: Special[];
    tourist_region: TouristRegion[];
    car_rentals: CarRental[];
    new_ground: boolean;
    routing_priority: number;
    type: LocationType;
}

export interface Locale {
    code: string;
    status: string;
}

export interface Meta {
    locale: Locale;
}

export interface Locations {
    locations: Location[];
    meta: Meta;
    last_refresh: number;
    results_retrieved: number;
}
