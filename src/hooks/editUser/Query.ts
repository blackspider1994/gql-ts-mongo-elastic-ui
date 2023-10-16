import { gql } from '@apollo/client';

const UsersQuery = gql`
mutation UpdateUser($input: userInput!, $updateUserId: ID!) {
  updateUser(input: $input, id: $updateUserId) {
    name
    _id
  }
}

`;
export default UsersQuery