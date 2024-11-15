/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../App";
import CreateDays from "./CreateDays";
import CreateCardContent from "./CreateCardContent";
import ChangeBackground from "./ChangeBackground";

function WeatherApp() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    // console.log(tabIndex);
  };

  const { filterData, city, checked } = useContext(DataContext);
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
    <Box sx={{ width: "90%", justifyContent: "center", mx: "auto" }}>
      <Box
        sx={{
          bgcolor: "light.main",
          borderRadius: 1,
          my: 1,
          justifyContent: "center",
          color: "light.contrastText",
        }}
      >
        <Tabs
        textColor="white"
          value={value}
          onChange={handleChange}
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "#fff"}}}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {daysArray.map((day, i) => (
            <Tab
              label={day}
              className={`${activeTab === i ? "active" : ""}`}
              onClick={() => handleTabClick(i)}
              sx={{ color: "light.contrastText" }}
            />
          ))}
        </Tabs>
      </Box>

      <div>
        {filterData.length > 0 && (
          <>
            <CreateDays i={activeTab} />
            <CreateCardContent
              data={filterData[activeTab]}
              city={city}
              checked={checked}
            />

            <ChangeBackground data={filterData[activeTab]} city={city} />
          </>
        )}
      </div>
    </Box>
  );
}

export default WeatherApp;
