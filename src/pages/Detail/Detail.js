import React, { useEffect, useState } from "react";
import { Container, Grid, Avatar } from "@material-ui/core";
import "./Detail.css";
import Text from "../../components/Text/Text";
import { c4, c1, c2 } from "../../themes/Color";
import moment from "moment";
import { Usb } from "@material-ui/icons";

export default function Detail(props) {
  const { currentPath, location } = props;
  const [categories, setcategories] = useState([
    "Among Us",
    "Dead By Daylight",
    "Brawlhalla",
    "Tips & Tricks",
    "Gamplay",
    "Review",
  ]);

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [currentPath]);

  const stripHtml = (html) => {
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
  };

  return (
    <div key={currentPath}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8645062450812910"
        data-ad-slot="6997234210"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Container maxWidth="md">
        <Grid container direction="row" className="category_container">
          {location.state.category.map((v, i) => {
            return (
              <Text
                key={i}
                size={15}
                style={{
                  backgroundColor: c4,
                  borderRadius: "5px",
                  padding: "0 6px",
                  margin: "10px 15px 0 0",
                }}
              >
                {categories[v]}
              </Text>
            );
          })}
        </Grid>
        <Grid container direction="row" className="title_container">
          <Text color={c1} size={25} weight={500}>
            {location.state.title}
          </Text>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          className="author_container"
        >
          <Grid container alignItems="center" xs={6}>
            <Avatar className="avatar" src={location.state.blogger.profile} />
            <Text color={c2} size={15}>
              {location.state.blogger.name}
            </Text>
          </Grid>
          <Text color={c2} size={15}>
            {moment(location.state.created_date, "YYYYMMDD").fromNow()}
          </Text>
        </Grid>
        <Grid
          container
          direction="row"
          style={{ backgroundImage: `url(${location.state.image})` }}
          className="header_img_container"
        ></Grid>
        <Grid container direction="row" className="detail_container">
          <Text color={c2} size={19}>
            <div dangerouslySetInnerHTML={{ __html: location.state.content }} />
          </Text>
        </Grid>
      </Container>
    </div>
  );
}
