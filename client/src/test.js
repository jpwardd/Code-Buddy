import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components';


const SIGNIN_MUTATION = gql `
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
    }
  }
`
const SIGNUP_MUTATION = gql `
  mutation signUp($email: String!, $password: String!, $name: String!, $username: String!) {
    signUp(email: $email, password: $password, name: $name, username: $username) {
      id
    }
  }
`



class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
    username: ''
  }

  render() {
    const { login, email, password, name, username } = this.state
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="password"
          />
        </div>
        <div className="flex mt3">
        <Mutation
          mutation={login ? SIGNIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name, username }}
        >
          {mutation => (
          <div className="pointer mr2 button">
          
            {login ? <button onClick={mutation}>Login</button> : 'create account'}
          </div>
          )}
        </Mutation>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
    </div>
    )
  }
}
  

export default Login

import React from 'react';
import { Box, Button, FormField, RadioButton, Select, TextArea, TextInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent pad='none'>
    <form onSubmit={event => event.preventDefault()}>
      <Box>
        <FormField label='Name'>
          <TextInput 
            value={email}
          />
        </FormField>
        <FormField label='Continent'>
          <Select options={['North America', 'South America']} />
        </FormField>
        <FormField label='Address'>
          <TextArea />
        </FormField>
        <FormField>
          <Box pad='small'>
            <CheckBox label='acknowledge' />
          </Box>
        </FormField>
        <FormField>
          <Box pad='small' gap='xsmall'>
            <RadioButton name='size' id='small' label='small' />
            <RadioButton name='size' id='large' label='large' />
          </Box>
        </FormField>
        <Button type='submit' label='Submit' primary={true} />
      </Box>
    </form>
  </SandboxComponent>
);





import React, { Component } from 'react'
import SideNav from './SideNav'
import Main from './Main'
import { Box, Grid } from 'grommet';


class Dash extends Component {
  render() {
    return(
    <Grid
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
        { name: 'side', start: [2, 0], end: [2, 0] },
        { name: 'foot', start: [0, 1], end: [2, 1] },
      ]}
      columns={['small', 'flex', 'medium']}
      rows={['medium', 'small']}
      gap='small'
    >
      <Box gridArea='nav' background='brand' />
      <Box gridArea='main' background='brand' />
      <Box gridArea='side' background='brand' />
      <Box gridArea='foot' background='accent-1' />
    </Grid>

    )
  }
}

export default Dash

const SIGNIN_MUTATION = gql `
 mutation {
   signIn(email: "johnny@gmail.com", password: "Secret2169") {
     id
     email
   }
 }
`