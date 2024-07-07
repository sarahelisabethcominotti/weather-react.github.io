import { Button, Grid, TextField } from "@mui/material";
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
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              type="submit"
              color="cyan"
              startIcon={<SearchIcon />}
              
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
