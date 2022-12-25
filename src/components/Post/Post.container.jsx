import React from 'react';
import PostView from './Post.view';

function PostContainer({ post, isSavedPostsScreen }) {
  return (
    <>
      <PostView post={post} isSavedPostsScreen={isSavedPostsScreen} />
    </>
  );
}

export default PostContainer;
