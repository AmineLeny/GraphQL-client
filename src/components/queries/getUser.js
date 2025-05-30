import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      picture
      location {
        city
        country
      }
      posts {
        id
        text
        image
      }
    }
  }
`;
