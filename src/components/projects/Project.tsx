import { Avatar, Box, CardMedia, Grid } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <Grid item>
      <Box>
        <CardMedia />
        <Box>
          <Box>
            <Avatar />
            <h2>titre</h2>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Project;
