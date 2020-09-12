import React from "react";
import { Container, Grid } from "@material-ui/core";
import header_img from "../../images/2.jpg";
import "./About.css";
import Text from "../../components/Text/Text";
import { c1, c2 } from "../../themes/Color";

export default function About() {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container justify="center">
          <Text color={c1} size={22}>
            About Us
          </Text>
        </Grid>
        <Grid container justify="center">
          <Text color={c2}>
            we're a small team and our mission is to create trust in technology
          </Text>
        </Grid>
        <Grid container direction="row">
          <img src={header_img} className="header_img" />
        </Grid>
        <Grid container justify="center">
          <Text color={c2}>
            We are a small and powerful team with great skill. Our team is
            creating an informative content website for users. This blog is
            about the game review and other information about the game. In the
            future project, our team will deliver more projects like this for
            users.
          </Text>
        </Grid>
      </Container>
    </div>
  );
}
