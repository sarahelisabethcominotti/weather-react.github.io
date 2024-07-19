import React from "react";
import { Box, Typography } from "@mui/material";

function LoadingPage() {
  return (
    <Box
      sx={{ bgcolor: "#fff", height: "100%", width: "100%", position: "fixed" }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", p: 10 }}>
        Finding your city...
      </Typography>
      <div className="text-center">
        <div className="spinner-border" role="status"></div>
      </div>
    </Box>
  );
}

export default LoadingPage;
