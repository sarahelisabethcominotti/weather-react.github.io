import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

function CreateCardContent({ data, city }) {
  return (
    <>
      <Box sx={{ minWidth: 280 }}>
        <Grid container spacing={1} sx={{my: 1}}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: "#fff", borderRadius: 1, height: '115px' }}>
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
                <Typography>{data.main.temp}&deg;C</Typography>
                <Typography>
                  Max: {data.main.temp_max}&deg;C - Min: {data.main.temp_min}
                  &deg;C
                </Typography>
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
