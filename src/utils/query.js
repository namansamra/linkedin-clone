import { gql } from '@apollo/client';

export const QUERY_GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      body
      image
      likes
      user {
        name
        emailId
        avatar
        id
        position
        company
      }
      comments {
        id
        body
        userId {
          name
          avatar
          id
          position
        }
      }
    }
  }
`;

export const QUERY_GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      emailId
      avatar
    }
  }
`;

export const QUERY_GET_SINGLE_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      body
      user {
        name
      }
    }
  }
`;
