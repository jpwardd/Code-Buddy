import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Box, Button, FormField, TextInput } from 'grommet';


const SIGNIN_MUTATION = gql `
  mutation SignInMutation($email: String!, $password: String!){
    signIn(email: $email, password: $password) {
     id
     email
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
    return (
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={{ email, password }}
          onCompleted={() => this.props.history.push('/')}
        >
      {mutation => (
      <div>

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
          <div>
          
            {<Button onClick={mutation}>Login</Button>}
          </div>
        </div>
      
        </Box>
      </form>
      </div>
      )}
    </Mutation>
    )
  }
}
  
export default Login