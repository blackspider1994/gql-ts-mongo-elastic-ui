import { gql } from '@apollo/client';

const UsersQuery = gql`
 mutation Mutation($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    _id
    name
    __typename
  }
}
`;
export default UsersQuery