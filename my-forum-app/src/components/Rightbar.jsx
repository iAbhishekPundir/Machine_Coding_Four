import { Box, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          <b>Sort by</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
