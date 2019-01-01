import React, { Component } from 'react'
import styled from 'styled-components'

const RankContainer = styled.div`
  padding: 8px;
  background: white;
  border-radius: 8px;
  color: #0E2E42;

  .motivation {
    padding: 4px;
    margin: 0;
    border-bottom: 2px solid #21D581
  }
  .answers {
    padding: 4px;
    margin: 0;
    border-bottom: 2px solid #21D581;
  }
  .followers {
    padding: 4px;
    margin: 0;
    border-bottom: 2px solid #21D581;
  }
  .following {
    padding: 4px;
    margin: 0;
    border-bottom: 2px solid #21D581;
  }
`



class Ranks extends Component {
  state = {
    motivation: 0,
    answers: 0
  }
  render() {
    const { motivation, answers } = this.state
    return(
      <RankContainer>
        <div className="motivation">
          <h4>motivation</h4>
          <h4>{motivation}</h4>
        </div>
        <div className="answers">
          <h4>answers</h4>
          <h4>{answers}</h4>
        </div>
        {/* <div className="followers">
          <h4>followers</h4>
        </div>
        <div className="following">
          <h4>following</h4>
        </div> */}
      </RankContainer>
    )
  }
}

export default Ranks