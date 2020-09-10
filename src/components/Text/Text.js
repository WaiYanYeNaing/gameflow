import React from "react";
import "./Text.css";
import { Typography } from "@material-ui/core";

export default function Text({ children, color, size, weight, style }) {
  return (
    <Typography
      style={{
        color: color ? color : "#fff",
        fontSize: size ? size : 15,
        fontWeight: weight ? weight : "normal",
        ...style,
      }}
    >
      {children}
    </Typography>
  );
}
