import { gql } from '@apollo/client';

const UsersQuery = gql`
  query getUsers {
    users {
    users {
      _id
      name
      __typename
    }
  }
  }
`;
export default UsersQuery