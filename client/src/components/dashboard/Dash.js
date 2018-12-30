import React, { Component } from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

import Main from './Main'

import Grid from '@material-ui/core/Grid'


class Dash extends Component {
  render() {
    return(
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <LeftNav />
        </Grid>

        <Grid item xs={6}>
          <Main />
        </Grid>

        <Grid item xs={3}>
          <RightNav />
        </Grid>
      </Grid>
    
    )
  }
}

export default Dash