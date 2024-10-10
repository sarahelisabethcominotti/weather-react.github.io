import { Button, Grid, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
// import { theme } from "../theme";

function SearchInput(props) {
  return (
    <div>
      <form onSubmit={props.handler}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              size="small"
              type="text"
              id="city"
              name="city"
              placeholder="Pick your city..."
              value={props.city}
              onChange={(e) => props.setter(e.target.value)}
              variant="standard"
              sx={{
                bgcolor: "light.secondary",
                color: "light.contrastText"
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              type="submit"
              color="light"
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens, align left with text on larger screens
                alignItems: "center",
                paddingLeft: { xs: "10px", sm: "10px" }, // Adjust padding for small screens
                paddingRight: { xs: 0, sm: "10px" },
                minWidth: { xs: "auto", sm: "64px" }, // Ensures button isn't too wide on small screens
              }}
              startIcon={<SearchIcon />}
            >
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                Search
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

SearchInput.propTypes = {
  handler: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
};

export default SearchInput;
