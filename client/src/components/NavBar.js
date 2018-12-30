import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from 'grommet'

const SIGNOUT_MUTATION = gql`
  mutation {
    signOut
  }

`
const Nav = styled.nav`
  border-bottom: 4px solid #B14AED;
  height: 70px;
  font-family: Roboto;
  font-size: 14px;
  font-height: 20px;
  .nav-link {
    padding: 10px;
    display: inline-flex;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    color: black;
  }
  div {
    float: right;
  }
`

const LogoutButton = styled.button`
  padding: 8px;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  background-color: #B14AED;
  border-radius: 4px;
  display: inline-flex;
  border: 1px solid black;
  

`

class NavBar extends Component{
  render() {
    return(
      <Nav>
      <div>
        <ul>
          <Button><Link className="nav-link" to="/blog">Blog</Link></Button>
          <Button><Link className="nav-link" to="/dash">Dash</Link></Button>
          <Mutation
            mutation={SIGNOUT_MUTATION}
          >
          {mutation => (
            <LogoutButton className="logout" onClick={mutation}>Logout</LogoutButton>
          )}
          </Mutation>
        </ul>
      </div>
      </Nav>
    )
  }
}

export default NavBar