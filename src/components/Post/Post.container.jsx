import React from 'react';
import PostView from './Post.view';

function PostContainer({ post }) {
  return (
    <>
      <PostView post={post} />
    </>
  );
}

export default PostContainer;
