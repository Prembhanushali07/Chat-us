import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            height={"100%"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            First
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
            sx={{ backgroundColor: "primary.main" }}
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Third
          </Grid>
        </Grid>
        <Footer />
      </>
    );
  };
};

export default AppLayout;
