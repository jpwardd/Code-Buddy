import React, { Component } from 'react'
import styled from 'styled-components'
import Ranks from './Ranks'


const LeftNavContainer = styled.div`
  margin-top: 10px;
  padding: 8px;
  border-radius: 8px;
  height: 100%;
  background: #EEF2F5;

  hr {
    height: 1px;
    background-color: #21D581;
    border: 2px solid #21D581;
  }
`;

const AvatarContainer = styled.div`
  margin: auto;
  border-radius: 8px;
  
  img {
    height: 25%;
    width: 25%;
    border-radius: 50%;
    margin: auto;
  }
  .followers{

  }
`
const FollowsContainer = styled.div`
  display: inline-flex;
  .followers {
    padding: 0 20px;
  }
  
`
class LeftNav extends Component {
  state = {
    followers: 0,
    following: 0
  }
  render() {
    const { followers, following } = this.state
    return(
      <LeftNavContainer>
        <AvatarContainer>
          <img src={'https://avatars1.githubusercontent.com/u/33610653?s=460&v=4'} alt="profile picture" />
          <h4>Username</h4>
          <FollowsContainer>
            <div className="followers">
              <h5>followers</h5>
              <p>{followers}</p>
            </div>
            <div className="following">
              <h5>following</h5>
              <p>{following}</p>
            </div>
          </FollowsContainer>
            <Ranks />
        </AvatarContainer>
      </LeftNavContainer>
    )
  }
}

export default LeftNav