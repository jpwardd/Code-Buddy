import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import LeftNav from './LeftNav'
import RightNav from './RightNav'
import Main from './Main'

const Space = styled.section`
  width: 100%;
  height: 70px;
  background: white;
`
const Footer = styled.footer`
  height: 116px;
  background: #0C1F2C;
  padding: 0;
  margin: 0
`

class Dash extends Component {
  render() {
    return(
      <Fragment>
      <Space>

      </Space>

        <Grid container spacing={16}>
          <Grid 
            item xs={3}
          >
            <LeftNav />
          </Grid>

          <Grid item xs={6}>
            <Main />
          </Grid>
          <Grid item xs={3}>
            <RightNav />
          </Grid>
        </Grid>
      </Fragment>
    
    )
  }
}

export default Dash