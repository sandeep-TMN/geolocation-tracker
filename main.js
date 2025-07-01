import GeoLocation from "@darkube/geolocation-service";

export function startTracking(config) {
    GeoLocation.start(config);
}

export function stopTracking() {
    GeoLocation.stop();
}

export const addLocationListener = GeoLocation.addLocationListener;
export const addStatusListener = GeoLocation.addStatusListener;
