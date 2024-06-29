import { weatherAPIKey } from "./api-key";

export let lat, long, timestamp, userCity;
export function getLocation(callback) {
  if (!navigator.geolocation) {
    console.log("Geolocation API not supported by this browser.");
    callback(new Error("Geolocation API not supported by this browser."));
  } else {
    console.log("Checking location...");
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    timestamp = position.timestamp;
    // console.log(position)
    // console.log('Latitude:', lat);
    // console.log('Longitude:', long);
    callback(null, { latitude: lat, longitude: long });
  }

  function error() {
    //instead of console log prompt the user to use the search bar
    console.log("Geolocation error!");
    callback(new Error("Geolocation error!"));
  }
}

export const cityLocation = async (a, b) => {
  // const weatherAPIWeatherForecastLatLong = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${weatherAPIKey}&units=metric`;
  const getCityLocation = `http://api.openweathermap.org/geo/1.0/reverse?lat=${a}&lon=${b}&appid=${weatherAPIKey}`;
  // console.log(getCityLocation)
  try {
    const response = await fetch(getCityLocation);
    if (!response.ok) throw response;
    // console.log(response)
    const data = await response.json();
    const userCity = data[0].name;
    console.log(data);
    return userCity;
  } catch (err) {
    // alert("please enter a valid city");
    console.error("Error fetching location", err.statusText || err.message);
  }
};

// console.log(userCity)

export default { lat, long, timestamp, userCity };
