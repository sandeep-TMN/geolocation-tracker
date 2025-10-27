import GeoLocation from "@darkube/geolocation-service";

export function start(config: object) {
    GeoLocation.start(config);
}

export function stop() {
    GeoLocation.stop();
}

export const addLocationListener = GeoLocation.addLocationListener;
export const addStatusListener = GeoLocation.addStatusListener;
