import { Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

function SearchInput(props) {
  return (
    <div id="pick-city">
      <form id="city-form" onSubmit={props.handler}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              type="text"
              id="city"
              name="city"
              placeholder="Pick your city..."
              value={props.city}
              onChange={(e) => props.setter(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              startIcon={<SearchIcon />}
              fullWidth
            >
              Search
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
