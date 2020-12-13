import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5)
  },
  label: {
    textTransform: 'none'
  }
}))


export default function Button(props) {

  const { text, size, color, variant, onClick, ...other } = props
  const classes = useStyles()

  return (
    <MuiButton
      variant={variant || "contained"} // "contained" is frequent so set as default
      size={size || "large"} // default
      color={color || "primary"} // default
      onClick={onClick}
      classes={{ root: classes.root, label: classes.label }}
      {...other} // pass in all other props
    >
      {text}
    </MuiButton>
  )
}
