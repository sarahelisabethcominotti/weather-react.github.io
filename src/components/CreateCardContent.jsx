import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

// eslint-disable-next-line react/prop-types
function CreateCardContent({ data, city, checked }) {
  console.log("data", data)
  console.log("city-data", city)
  const fahrenheitTemperature = Math.floor(data.main.temp * (9 / 5) + 32);
  const fahrenheitMax = Math.floor(data.main.temp_max * (9 / 5) + 32);
  const fahrenheitMin = Math.floor(data.main.temp_min * (9 / 5) + 32);

  const sunrise = new Date(city.sunrise * 1000)
  const sunset = new Date(city.sunset * 1000)
  const currentTime = Date.now()/1000
  // console.log("current time", currentTime)
  // console.log("sunset time", city.sunset)
  // console.log("sunrise time", city.sunrise)

  // const darkmode = false

  const sunriseHours = sunrise.getHours()
  const sunriseMinutes = "0" + sunrise.getMinutes()
  const formattedSunrise = sunriseHours + ":" + sunriseMinutes.substr(-2)

  const sunsetHours = sunset.getHours()
  const sunsetMinutes = "0" + sunset.getMinutes()
  const formattedSunset = sunsetHours + ":" + sunsetMinutes.substr(-2)

  // if (currentTime > city.sunset || currrentTime < city.sunrise) {
  //   dakmode
  // } 

  // currentTime > city.sunset || currentTime < city.sunrise ? darkmode = true

  // if ( currentTime > city.sunset || currentTime < city.sunrise ) {
  //   darkmode ==== true
  // }

  return (
    <>
      <Box sx={{ minWidth: 280 }}>
        <Grid container spacing={1} sx={{ my: 1 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: currentTime > city.sunset || currentTime < city.sunrise ? "#000000" : "rgba(224, 247, 250, 0.7)",
                borderRadius: 1,
                height: "130px",
                color: currentTime > city.sunset || currentTime < city.sunrise ? "rgba(224, 247, 250, 0.7)" : "#000000"
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>City 🏙️</Typography>
                <Typography>{city.name}, {city.country}</Typography>
                <Grid container>
                  <Grid item xs={6} md={6}>
                    <Typography>Sunrise 🌆</Typography>
                    <Typography>{formattedSunrise}am</Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography>Sunset 🌃</Typography>
                    <Typography>{formattedSunset}pm</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{
                bgcolor: currentTime > city.sunset || currentTime < city.sunrise ? "#000000" : "rgba(224, 247, 250, 0.7)",
                borderRadius: 1,
                height: "130px",
                color: currentTime > city.sunset || currentTime < city.sunrise ? "rgba(224, 247, 250, 0.7)" : "#000000"
              }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>Temperature 🌡️</Typography>
                <Typography>
                  {checked
                    ? `${data.main.temp}°C`
                    : `${fahrenheitTemperature}°F`}
                </Typography>
                <Typography>
                  {checked
                    ? `Max: ${data.main.temp_max}°C - Min:
	                      ${data.main.temp_min}
	                      °C`
                    : `Max: ${fahrenheitMax}°F - Min:
	                      ${fahrenheitMin}
	                      °F`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{
                bgcolor: currentTime > city.sunset || currentTime < city.sunrise ? "#000000" : "rgba(224, 247, 250, 0.7)",
                borderRadius: 1,
                color: currentTime > city.sunset || currentTime < city.sunrise ? "rgba(224, 247, 250, 0.7)" : "#000000"
              }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>Humidity 💧</Typography>
                <Typography>{data.main.humidity}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{
                bgcolor: currentTime > city.sunset || currentTime < city.sunrise ? "#000000" : "rgba(224, 247, 250, 0.7)",
                borderRadius: 1,
                color: currentTime > city.sunset || currentTime < city.sunrise ? "rgba(224, 247, 250, 0.7)" : "#000000"
              }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>Wind Speed 💨</Typography>
                <Typography>{data.wind.speed}km/h</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{
                bgcolor: currentTime > city.sunset || currentTime < city.sunrise ? "#000000" : "rgba(224, 247, 250, 0.7)",
                borderRadius: 1,
                color: currentTime > city.sunset || currentTime < city.sunrise ? "rgba(224, 247, 250, 0.7)" : "#000000"
              }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>Conditions ⛅️</Typography>
                <Typography>{data.weather[0].main}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

CreateCardContent.propTypes = {
  data: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
};

export default CreateCardContent;
