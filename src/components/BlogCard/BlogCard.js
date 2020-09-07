import React from "react";
import "./BlogCard.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Text from "../Text/Text";
import { Avatar, Grid } from "@material-ui/core";

export default function BlogCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className="image"
          image="https://images.hdqwalls.com/download/2020-4k-cyberpunk-2077-81-1300x1300.jpg"
        />
        <CardContent>
          <Text color={"#0c0112"} size={19} weight={"bold"}>
            About Ghost + Gatsby
          </Text>
          <Text color={"#4f4f4f"}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Text>
          <Grid
            container
            direction="row"
            justify="space-between"
            className="avatar_container"
          >
            <Grid container alignItems="center" xs={6}>
              <Avatar
                className="avatar"
                src="https://images.hdqwalls.com/download/2020-4k-cyberpunk-2077-81-1300x1300.jpg"
              />
              <Text color={"#666363"} size={13}>
                Gatsby
              </Text>
            </Grid>
            <Text color={"#666363"} size={13}>
              2 min read
            </Text>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
