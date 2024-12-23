/* eslint-disable react/jsx-key */
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import LoadingPage from "./components/LoadingPage";
import WeatherApp from "./components/WeatherApp";
import { useState, useEffect, createContext } from "react";
import {
  getLocation,
  userCity,
  lat,
  long,
  timestamp,
  cityLocation,
} from "./components/getLocation";
import SearchInput from "./components/SearchInput";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import AntTabs, { AntTab } from "./components-styles";
import { Switch } from "@mui/material";
import { weatherAPIKey } from "./components/api-key";
import { ThemeProvider } from "@emotion/react";
import { theme, darkTheme } from "./theme.jsx";

export const DataContext = createContext();

function App() {
  // cityLocation(lat, long)
  // console.log("outside", cityLocation(lat, long));
  // console.log("outside city", userCity);

  const [filterData, setFilterData] = useState([]);
  //userCity to be put below to render that city on first load
  const [city, setCity] = useState("");
  // console.log("city:", city);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getLocation(async (err) => {
      if (err) {
        console.error(err.message);
      } else {
        lat, long, timestamp, userCity;

        try {
          const cityName = await cityLocation(lat, long);
          console.log("Accessed outside function - Latitude:", lat);
          console.log("Accessed outside function - Longitude:", long);
          console.log("Accessed outside function - User City:", cityName);
          setCity(cityName);
          loadWeather(cityName);
          setIsLoading(false);
        } catch (err) {
          console.error("Error fetching city location:", err);
        }
      }
    });
  }, []);
  // console.log(isLoading);

  // useEffect(() => {
  //   if (city) {
  //     loadWeather(city);
  //   }
  // }, [city]);

  const loadWeather = async (city) => {
    // const weatherAPIWeatherForecastLatLong = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${weatherAPIKey}&units=metric`;
    const weatherAPIWeatherForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherAPIKey}&units=metric`;
    try {
      const response = await fetch(weatherAPIWeatherForecast);
      if (!response.ok) throw response;
      const data = await response.json();
      // const renderCity = data.city.name + ", " + data.city.country
      const cityData = data.city;
      console.log("disabled location", data);
      // console.log("disabled location cityname", newCity)
      const filterData = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      // console.log(filterData);
      setFilterData(filterData);
      setCity(cityData);
    } catch (err) {
      alert("please enter a valid city");

      console.error("Error fetching data", err.statusText || err.message);
    }
  };

  // console.log(filterData)

  // useEffect(() => {
  //   loadWeather(currentCity);
  // }, [currentCity]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    console.log("handler city");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      // setCity(city);
      loadWeather(city);
      setIsLoading(false);
    }
  };

  // console.log(daysArray);

  const [checked, setChecked] = useState(false);
  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };

  const currentTime = Date.now()/1000

  // const currentTime = Date.now()/1000
  console.log("current time", currentTime)
  console.log("sunset time", city.sunset)
  console.log("sunrise time", city.sunrise)

  
  return (
    <>
      <ThemeProvider  theme={currentTime > city.sunset || currentTime < city.sunrise ? darkTheme : theme}>
        <header className="z-1">
          <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
            <AppBar position="fixed" color="light">
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textAlign: "left",
                    fontSize: { xs: 14, sm: 20 },
                  }}
                >
                  Weather Dashboard
                </Typography>
                <SearchInput
                  variant="standard"
                  label="standard"
                  handlerCity={handleCityChange}
                  handler={handleSubmit}
                  setter={setCity}
                  city={city.name}
                />
                <Typography>°F</Typography>
                <Switch
                  checked={checked}
                  onChange={switchHandler}
                  color="default"
                />
                <Typography>°C</Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
        <main className="z-0">
          <DataContext.Provider value={{ filterData, city, checked }}>
            {isLoading ? <LoadingPage /> : <WeatherApp />}
          </DataContext.Provider>
        </main>

        <footer></footer>
      </ThemeProvider>
    </>
  );
}

export default App;
