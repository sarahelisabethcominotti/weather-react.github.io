import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../App";
import CreateDays from "./CreateDays";
import CreateCardContent from "./CreateCardContent";
import ChangeBackground from "./ChangeBackground";

function WeatherApp() {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
      // console.log(tabIndex);
    };

    const {filterData, city} = useContext(DataContext)
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
  return (
    <Box sx={{ width: "90%", justifyContent: "center", mx:"auto" }}>
      <Box sx={{ bgcolor: "#fff", borderRadius: 1, my: 1 }}>
        <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile>
          {daysArray.map((day, i) => (
            <Tab
              label={day}
              className={`${activeTab === i ? "active" : ""}`}
              onClick={() => handleTabClick(i)}
            />
          ))}
        </Tabs>
      </Box>

      <div>
        {filterData.length > 0 && (
          <>
            <CreateDays i={activeTab} />
            <CreateCardContent data={filterData[activeTab]} city={city} />

            <ChangeBackground data={filterData[activeTab]} />
          </>
        )}
      </div>
    </Box>
  );
}

export default WeatherApp;
