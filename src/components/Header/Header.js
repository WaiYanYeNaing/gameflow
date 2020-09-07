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
            <Text>Ghost</Text>
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
          <Text size={28}>Ghost & Gatsby</Text>
        </Grid>
        {/* Sub_Title */}
        <Grid container direction="row" justify="center">
          <Text color={"#898989"}>Thought, stories and JAMstack</Text>
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
              <Text color={"#898989"}>Home</Text>
            </a>
            <a className="action_btn" href="#">
              <Text color={"#898989"}>Tag</Text>
            </a>
            <a className="action_btn" href="#">
              <Text color={"#898989"}>Author</Text>
            </a>
            <a className="action_btn" href="#">
              <Text color={"#898989"}>Hellp</Text>
            </a>
          </Grid>
          <Grid>
            <Text color={"#898989"}>About</Text>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
