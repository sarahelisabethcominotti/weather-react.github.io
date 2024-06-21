export let lat, long
export function getLocation(callback) {
  if (!navigator.geolocation) {
    console.log("Geolocation API not supported by this browser.");
    callback(new Error("Geolocation API not supported by this browser."))
  } else {
    console.log("Checking location...");
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    // console.log('Latitude:', lat);
    // console.log('Longitude:', long);
    callback(null, { latitude: lat, longitude: long });
  }


  function error() {
    console.log("Geolocation error!");
    callback(new Error("Geolocation error!"))
  }
}

// console.log(lat, long)

export default { lat, long }
