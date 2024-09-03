import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

// eslint-disable-next-line react/prop-types
function CreateCardContent({ data, city, checked }) {

const celsiusTemperature = Math.floor(data.main.temp * (9/5) + 32)
const celsiusMax = Math.floor(data.main.temp_max * (9/5) + 32)
const celsiusMin = Math.floor(data.main.temp_min * (9/5) + 32)
  return (
    <>
      <Box sx={{ minWidth: 280 }}>
        <Grid container spacing={1} sx={{ my: 1 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: "#fff", borderRadius: 1, height: "115px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>City 🏙️</Typography>
                <Typography>{city}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: "#fff", borderRadius: 1 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>Temperature 🌡️</Typography>
                {checked ? (
                  <>
                    <Typography>{data.main.temp}&deg;C</Typography>
                    <Typography>
                      Max: {data.main.temp_max}&deg;C - Min:
                      {data.main.temp_min}
                      &deg;C
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography>{celsiusTemperature}&deg;F</Typography>
                    <Typography>
                      Max: {celsiusMax}&deg;F - Min:
                      {celsiusMin}
                      &deg;F
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#fff", borderRadius: 1 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>Humidity 💧</Typography>
                <Typography>{data.main.humidity}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#fff", borderRadius: 1 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }}>Wind Speed 💨</Typography>
                <Typography>{data.wind.speed}km/h</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#fff", borderRadius: 1 }}>
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
