import { gql } from '@apollo/client';

const UsersQuery = gql`
mutation CreateUser($input: userInput!) {
  createUser(input: $input) {
    _id
    name
  }
}

`;
export default UsersQuery