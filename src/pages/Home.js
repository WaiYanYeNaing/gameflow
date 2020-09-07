import React from "react";
import Header from "../components/Header/Header";
import { Container, Grid } from "@material-ui/core";
import BlogCard from "../components/BlogCard/BlogCard";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Grid container direction="row" alignItems="flex-start">
          <Grid container xs={12} sm={6} lg={4} className="card_container">
            <BlogCard />
          </Grid>
          <Grid container xs={12} sm={6} lg={4} className="card_container">
            <BlogCard />
          </Grid>
          <Grid container xs={12} sm={6} lg={4} className="card_container">
            <BlogCard />
          </Grid>
          <Grid container xs={12} sm={6} lg={4} className="card_container">
            <BlogCard />
          </Grid>
          <Grid container xs={4} sm={6} lg={4} className="card_container">
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
