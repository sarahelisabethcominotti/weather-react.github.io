import React from "react";
import { Box, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Water } from "@mui/icons-material";

function LoadingPage() {
  return (
    <Box sx={{ bgcolor: "rgba(224, 247, 250, 0.7)", padding: "100px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", paddingBottom: "10px" }}
      >
        <p>Finding your city...</p>

        <p>If your location has been disabled please search for a city.</p>
      </Typography>
      {/* <div className="text-center">
        <div className="spinner-border" role="status"></div>
      </div> */}
      <div className="loader-container">
        <div className="bouncing-drops">
          <div className="drop">
            <WaterDropIcon color="primary" />
          </div>
          <div className="drop">
            <WaterDropIcon color="primary" />
          </div>
          <div className="drop">
            <WaterDropIcon color="primary" />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default LoadingPage;
