import React from "react";
import "./BlogCard.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Text from "../Text/Text";
import { Avatar, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { c1, c2 } from "../../themes/Color";
import moment from "moment";

export default function BlogCard({
  title,
  image,
  content,
  blogger,
  created_date,
  category,
}) {
  const MAX_LENGTH = 150;

  return (
    <Link
      to={{
        pathname: "/detail",
        state: { title, image, content, blogger, created_date, category },
      }}
      className="link"
    >
      <Card>
        <CardActionArea>
          <CardMedia className="image" image={image} />
          <CardContent>
            <Text color={c1} size={19} weight={"bold"}>
              {title}
            </Text>
            <Text color={c2}>
              {content.length > MAX_LENGTH ? (
                <div>
                  {`${content.substring(0, MAX_LENGTH)}...`}
                  Read more
                </div>
              ) : (
                <p>{content}</p>
              )}
            </Text>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className="avatar_container"
            >
              <Grid container alignItems="center" xs={6}>
                <Avatar className="avatar" src={blogger.profile} />
                <Text color={c2} size={13}>
                  {blogger.name}
                </Text>
              </Grid>
              <Text color={c2} size={13}>
                {moment(created_date, "YYYYMMDD").fromNow()}
              </Text>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
