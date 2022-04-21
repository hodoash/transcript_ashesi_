import React from "react";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignment: "center",
    padding: "0 5rem 0 5rem",
  },
  item: {
    padingTop: "1rem",
  },
});

export default function Grid(props) {
  const { icon, title, hours } = props;
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>{icon}</div>
      <Typography className={classes.item}>{title}</Typography>
      <div className={classes.item}>
        <hr />
      </div>
      <Typography className={classes.item}>{hours}</Typography>
    </div>
  );
}
