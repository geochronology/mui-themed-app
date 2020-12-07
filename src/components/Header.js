import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={4} style={{ border: '1px solid #fff' }}>
            <InputBase />
          </Grid>
          <Grid item sm={8} style={{ border: '1px solid #000' }}>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
