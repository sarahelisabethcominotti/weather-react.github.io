// import { useState } from "react";
import PropTypes from "prop-types";

function SearchInput(props) {
    console.log(props)
  return (

    <div id="pick-city">
        
      <form id="city-form" onSubmit={props.handler}>
        <div className="city-form row mb-2 mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="pick your city.."
              value={props.city}
              onChange={(e) => props.setter(e.target.value)}
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
  );
}

SearchInput.propTypes = {
  handler: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired
};

export default SearchInput;
