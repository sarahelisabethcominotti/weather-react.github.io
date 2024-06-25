import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ChangeBackground from "./components/ChangeBackground";
import CreateDays from "./components/CreateDays";
import CreateCardContent from "./components/CreateCardContent";
import { useState, useEffect } from "react";
import { weatherAPIKey } from "./components/api-key";
import { getLocation } from "./components/getLocation";
import { lat, long } from "./components/getLocation";
import SearchInput from "./components/SearchInput";

getLocation((err) => {
  if (err) {
    console.error(err.message);
  } else {
    // console.log('Coordinates:', coords);
    // // You can now use lat and long outside of getLocation function
    // console.log('Accessed outside function - Latitude:', lat);
    // console.log('Accessed outside function - Longitude:', long);
    lat, long;
  }
});

console.log("outside", lat, long);

function App() {
  const [filterData, setFilterData] = useState([]);
  const [city, setCity] = useState("London");
  const [currentCity, setCurrentCity] = useState("");

  // const cityFixed = "london";
  const loadWeather = async () => {
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

  useEffect(() => {
    loadWeather(currentCity);
  }, [currentCity]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentCity(city);
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
        <nav className="navbar bg-info-subtle">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Weather Dashboard</span>
            <SearchInput handler={handleSubmit} setter={setCity} city={city}/>
          </div>
        </nav>
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
