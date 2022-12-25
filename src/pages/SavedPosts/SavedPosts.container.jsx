import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import Layout from '../../components/Layout/Layout';
import { QUERY_GET_SAVED_POSTS } from '../../utils/query';
import SavedPostsView from './SavedPosts.view';
import { useGlobalStore } from '../../store/store';

function SavedPostsContainer() {
  const { data, loading, error } = useQuery(QUERY_GET_SAVED_POSTS, {
    fetchPolicy: 'network-only',
  });
  const [userInfo, setUserInfo] = useGlobalStore((state) => [
    state.appState.userInfo,
    state.setUserInfo,
  ]);

  if (error) {
    return <div> Some error occured please try again...</div>;
  }

  if (loading) {
    return (
      <Layout>
        <Flex
          alignItems={'center'}
          justifyContent="center"
          flexDirection={'column'}
          gap="1rem"
          pt={'1rem'}
          pb="10rem"
        >
          {[...Array(Math.floor(Math.random() * 5) + 1)].map((_, i) => (
            <Flex
              flexDir={'column'}
              padding={'1rem'}
              width="100%"
              gap="1rem"
              borderRadius="0.8rem"
              key={i}
              boxShadow="lg"
              bg="white"
            >
              <Flex gap={'1rem'} width={'100%'} maxW="54rem">
                <SkeletonCircle
                  size={{ base: '4rem', md: '8rem' }}
                  minW={{ base: '4rem', md: '8rem' }}
                />
                <Skeleton
                  width={'100%'}
                  height={{ base: '4rem', md: '8rem' }}
                />
              </Flex>
              <Skeleton width={'100%'} height="20rem" />
              <Skeleton width={'100%'} height="10rem" />
              <Skeleton width={'100%'} height="5rem" />
            </Flex>
          ))}
        </Flex>
      </Layout>
    );
  }
  return (
    <Layout>
      {data.savedPosts.length == 0 ? (
        <Flex
          p={'16px'}
          borderRadius="10px"
          width={'100%'}
          minHeight="400px"
          bg={'white'}
          fontSize="16px"
          fontWeight={'semibold'}
          color="gray.500"
          justifyContent={'center'}
          alignItems="center"
        >
          No Saved Posts Found!!
        </Flex>
      ) : (
        <SavedPostsView posts={data.savedPosts} isSavedPostsScreen={true} />
      )}
    </Layout>
  );
}

export default SavedPostsContainer;
