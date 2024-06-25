import PropTypes from "prop-types";

function CreateCardContent({ data, city }) {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div>
                <div className="card-body">
                  <h5 className="card-title">
                    City
                    <span role="img" aria-label="city">
                      🏙️
                    </span>
                  </h5>
                  <p className="card-text">{city}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <h5 className="card-title">
                  Temperature{" "}
                  <span role="img" aria-label="termometer">
                    🌡️
                  </span>
                </h5>

                <div className="card-body">
                  <div className="card-text">
                    <div className="row align-items-center">
                      <div className="col card-text">
                        {data.main.temp}&deg;C
                      </div>
                      <div className="col">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Max: {data.main.temp_max}&deg;C
                          </li>
                          <li className="list-group-item">
                            Min: {data.main.temp_min}&deg;C
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Humidity{" "}
                <span role="img" aria-label="drop">
                  💧
                </span>
              </h5>
              <p className="card-text">{data.main.humidity}%</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Wind Speed{" "}
                <span role="img" aria-label="wind">
                  💨
                </span>
              </h5>
              <p className="card-text">{data.wind.speed}km/h</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Conditions{" "}
                <span role="img" aria-label="weather">
                  ⛅️
                </span>
              </h5>
              <p className="card-text">{data.weather[0].main}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CreateCardContent.propTypes = {
  data: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
};

export default CreateCardContent;
