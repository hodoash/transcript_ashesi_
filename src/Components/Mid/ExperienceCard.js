import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/SchoolTwoTone";
import { Typography } from "@material-ui/core";

const styles = makeStyles({
    wrapper:{
        display: "flex",
        flexDirection: "column",
        alignment: "center",
        padding: "0 5rem 0 5rem"
    },
    item:{
        padingTop: "1rem"
    }
})

export default function ExperienceCard(props) {
    const {icon,title} = props;
    const classes = styles();

    return (
        <div className={classes.wrapper}>
          <div className={classes.item}>{icon}</div>
        <Typography className={classes.item}>{title}</Typography>
      </div>
    )
}
