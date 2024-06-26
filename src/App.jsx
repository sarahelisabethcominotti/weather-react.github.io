/* eslint-disable react/jsx-key */
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ChangeBackground from "./components/ChangeBackground";
import CreateDays from "./components/CreateDays";
import CreateCardContent from "./components/CreateCardContent";
import { useState, useEffect } from "react";
import { weatherAPIKey } from "./components/api-key";
import { getLocation, userCity } from "./components/getLocation";
import { lat, long, timestamp } from "./components/getLocation";
import SearchInput from "./components/SearchInput";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { cityLocation } from "./components/getLocation";

function App() {
  // cityLocation(lat, long)

  // console.log("outside", cityLocation(lat, long));
  // console.log("outside city", userCity);

  const [filterData, setFilterData] = useState([]);
  //userCity to be put below to render that city on first load
  const [city, setCity] = useState("");
  console.log("city:", city);
  useEffect(() => {
    getLocation(async (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Accessed outside function - Latitude:", lat);
        console.log("Accessed outside function - Longitude:", long);
        lat, long, timestamp, userCity;

        try {
          const cityName = await cityLocation(lat, long);
          console.log("Accessed outside function - User City:", city);
          setCity(cityName);
          loadWeather(cityName);
        } catch (err) {
          console.error("Error fetching city location:", err);
        }
      }
    });
  }, []);

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
      // console.log(data)
      const filterData = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      // console.log(filterData);
      setFilterData(filterData);
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      // setCity(city);
      loadWeather(city);
    }
  };

  const daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysArray = filterData.map(
    (e) => daysWeek[new Date(e.dt * 1000).getDay()]
  );

  // console.log(daysArray);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    // console.log(tabIndex);
  };

  return (
    <>
      <header className="z-1">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Weather Dashboard
              </Typography>
              <SearchInput
                handlerCity={handleCityChange}
                handler={handleSubmit}
                setter={setCity}
                city={city}
              />
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main className="z-0">
        <div className="pt-3 ps-3 pe-3 pb-3 mt-2 weather-widget">
          <ul className="nav nav-tabs p-2 card" id="myTab" role="tablist">
            {daysArray.map((day, i) => (
              <button
                className={`nav-link ${activeTab === i ? "active" : ""}`}
                onClick={() => handleTabClick(i)}
              >
                {day}
              </button>
            ))}
          </ul>

          <div className="test-index">
            {filterData.length > 0 && (
              <>
                <CreateDays i={activeTab} />
                <CreateCardContent data={filterData[activeTab]} city={city} />
                <ChangeBackground data={filterData[activeTab]} />
              </>
            )}
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
