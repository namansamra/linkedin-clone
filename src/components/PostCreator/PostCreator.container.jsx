import React from 'react';
import PostCreatorView from './PostCreator.view';

function PostCreatorContainer({ isOpen, onClose }) {
  return (
    <>
      <PostCreatorView isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default PostCreatorContainer;
