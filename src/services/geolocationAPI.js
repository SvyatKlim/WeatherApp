import {ref} from 'vue'
export async function geoFindMe() {
    console.log('geoFindMe')
    let locations = ref({status: ''});

    function success(position) {
        console.log('call')
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        locations.value = {
           status: "success",
           latitude: latitude,
            longitude: longitude
        }
    }

    function error() {
        locations.value.status = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
        locations.value.status = "Geolocation is not supported by your browser";
    } else {
        locations.value.status = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
    console.log(locations)
    return locations;
}
