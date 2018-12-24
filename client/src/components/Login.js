import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Box, Button, FormField, TextInput } from 'grommet';


const SIGNIN_MUTATION = gql `
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
     email
     id
    }
  }
`



class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
  
    const { email, password } = this.state
    console.log(email)
    console.log(password)
    return (
      <form>
        <Box>
        <FormField label='email'>
          <TextInput 
            value={email}
            name="email"
            onChange={this.handleChange}
            
          />
        </FormField>

        <FormField label='password'>
          <TextInput 
            value={password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
        </FormField>
        <div>
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={{ email, password }}
        >
          {mutation => (
          <div>
          
            {<Button onClick={mutation}>Login</Button>}
          </div>
          )}
        </Mutation>
        </div>
      
        </Box>
      </form>
    )
  }
}
  
export default Login