import React from 'react';
import { Flex, useQuery } from '@chakra-ui/react';
import { Post } from '../../components/Post';

function SavedPostsView({ posts, loading, isSavedPostsScreen = false }) {
  return (
    <Flex flexDir={'column'} alignItems={'center'} width="100%">
      {posts.map((i) => (
        <Post post={i} key={i.id} isSavedPostsScreen={isSavedPostsScreen} />
      ))}
    </Flex>
  );
}

export default SavedPostsView;
