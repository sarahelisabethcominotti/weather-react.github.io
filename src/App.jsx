import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ChangeBackground from "./components/ChangeBackground";
import CreateDays from "./components/CreateDays";
import CreateCardContent from "./components/CreateCardContent";
import { useState, useEffect } from "react";

function App() {
  const [filterData, setFilterData] = useState([]);
  const [city, setCity] = useState(`London`);
  const [currentCity, setCurrentCity] = useState("");

  const weatherAPIKey = "f6916935ad851f78c6dbd897f6f52ac7";
  // const cityFixed = "london";
  const loadWeather = async () => {
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
      alert("please enter a valid city")
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
            <div id="pick-city">
              <form id="city-form" onSubmit={handleSubmit}>
                <div className="city-form row mb-2 mt-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      placeholder="pick your city.."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="search-button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
