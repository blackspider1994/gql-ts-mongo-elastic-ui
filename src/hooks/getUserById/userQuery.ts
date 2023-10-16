import { gql } from '@apollo/client';

const UsersQuery = gql`
 query Query($userId: ID) {
  user(id: $userId) {
    _id
    name
  }
}
`;
export default UsersQuery