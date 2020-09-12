import React from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import {
  SportsEsports,
  Facebook,
  Twitter,
  Instagram,
} from "@material-ui/icons";
import { Typography, Container } from "@material-ui/core";
import Text from "../Text/Text";
import { c2, c3 } from "../../themes/Color";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Grid
      className="container"
      container
      direction="column"
      alignItems="center"
    >
      <Container>
        {/* Action */}
        <Grid container direction="row" justify="space-between">
          <Grid container xs={6}>
            <SportsEsports className="icon" />
            <Text>Gameflow</Text>
          </Grid>
          <Grid>
            <Facebook className="icon" />
            <Twitter className="icon" />
            <Instagram className="icon" />
          </Grid>
        </Grid>
        {/* Title */}
        <Grid
          className="title_container"
          container
          direction="row"
          justify="center"
        >
          <Text size={28}>GameFlow</Text>
        </Grid>
        {/* Sub_Title */}
        <Grid container direction="row" justify="center">
          <Text color={c3}>New Content will be available soon..</Text>
        </Grid>
        {/* Action Route */}
        <Grid
          className="action_container"
          container
          direction="row"
          justify="space-between"
        >
          <Grid container xs={9}>
            <a className="action_btn" href="#">
              <Text color={c3}>Home</Text>
            </a>
            <a className="action_btn" href="#">
              <Text color={c3}>Tag</Text>
            </a>
            <a className="action_btn" href="#">
              <Text color={c3}>Author</Text>
            </a>
          </Grid>
          <Grid>
            <Link to={{ pathname: "/about", state: {} }} className="action_btn">
              <Text color={c3}>About Us</Text>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
