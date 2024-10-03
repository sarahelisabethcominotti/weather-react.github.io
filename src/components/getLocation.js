const weatherAPIKey = process.env.REACT_APP_API_KEY

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
    callback(null, { latitude: lat, longitude: long });
  }

  function error() {
    //instead of console log prompt the user to use the search bar
    // console.log("Geolocation error!");
    new Error(
      "Geolocation error!",
      alert("Your location has been disabled, please search for a city")
    );
  }
}

export const cityLocation = async (a, b) => {
  // const weatherAPIWeatherForecastLatLong = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${weatherAPIKey}&units=metric`;
  const getCityLocation = `http://api.openweathermap.org/geo/1.0/reverse?lat=${a}&lon=${b}&appid=${weatherAPIKey}`;
  console.log(getCityLocation);
  try {
    const response = await fetch(getCityLocation);
    if (!response.ok) throw response;
    const data = await response.json();
    userCity = data[0].name;
    // console.log("enabled location data", data);
    // console.log("enabled location userCity", userCity)
    return userCity;
  } catch (err) {
    // alert("please enter a valid city");
    console.error("Error fetching location", err.statusText || err.message);
  }
};

export default { lat, long, timestamp, userCity };
