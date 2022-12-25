import { gql } from '@apollo/client';
export const MUTATION_ADD_LIKE = gql`
  mutation addLike($input: ADD_LIKE_INPUT!) {
    addLike(input: $input) {
      message
    }
  }
`;

export const MUTATION_REMOVE_LIKE = gql`
  mutation removeLike($id: ID!) {
    removeLike(id: $id) {
      message
    }
  }
`;

export const MUTATION_ADD_POST = gql`
  mutation addPost($input: ADD_POST_INPUT!) {
    addPost(input: $input) {
      message
    }
  }
`;

export const MUTATION_ADD_COMMENT = gql`
  mutation addComment($input: ADD_COMMENT_INPUT!) {
    addComment(input: $input) {
      message
    }
  }
`;

export const MUTATION_USER_SIGNIN = gql`
  mutation signInUser {
    signInUser {
      id
      name
      emailId
      avatar
      access_token
      otherInfoFilled
      savedPosts {
        id
        user {
          id
          emailId
          name
        }
      }
    }
  }
`;

export const MUTATION_USER_ADD_OTHER_INFO = gql`
  mutation updateUser($input: UPDATE_USER_INPUT!) {
    updateUser(input: $input) {
      name
      about
      company
      position
    }
  }
`;

export const MUTATION_REMOVE_POST = gql`
  mutation removePost($input: REMOVE_POST!) {
    removePost(input: $input) {
      id
    }
  }
`;

export const MUTATION_SAVE_POST = gql`
  mutation savePost($id: ID!) {
    savePost(id: $id) {
      message
    }
  }
`;

export const MUTATION_UNSAVE_POST = gql`
  mutation unsavePost($id: ID!) {
    unsavePost(id: $id) {
      message
    }
  }
`;
