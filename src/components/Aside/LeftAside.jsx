import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useGlobalStore } from '../../store/store';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { CgHashtag } from 'react-icons/cg';

const trendingArr = [
  {
    id: 1,
    text: 'India',
  },
  {
    id: 2,
    text: 'Techjobs',
  },
  {
    id: 3,
    text: 'Google India Recruiting',
  },
];

function LeftAside() {
  const userInfo = useGlobalStore((state) => state.appState.userInfo);
  return (
    <Flex
      flexDir="column"
      gap={'2rem'}
      display={{ base: 'none', md: 'none', lg: 'flex' }}
    >
      <Flex
        borderRadius="8px"
        width={'22.5rem'}
        flexDir="column"
        height={'auto'}
        position={'relative'}
        alignItems="center"
        bgColor={'#fff'}
        boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      >
        <Box
          borderTopLeftRadius="8px"
          borderTopRightRadius={'8px'}
          minH="6rem"
          height="30%"
          width={'100%'}
          bgGradient={'linear-gradient(to-r, #ababab, #e7e7e7)'}
        ></Box>
        <Image
          boxSize={'7rem'}
          borderRadius="full"
          src={userInfo?.avatar}
          fit={'cover'}
          position="absolute"
          top={'2rem'}
          left="calc(50% - 3.5rem)"
        />
        <Box
          height={'100%'}
          borderBottomLeftRadius="8px"
          borderBottomRightRadius={'8px'}
          mt="4rem"
          textAlign={'center'}
        >
          <Text
            fontWeight={'600'}
            fontSize="1.6rem"
            mb={'0.4rem'}
            color="rgba(0,0,0,0.9)"
          >
            {userInfo?.name}
          </Text>
          <Text fontWeight={'400'} fontSize="1.2rem" color="rgba(0,0,0,0.6)">
            {userInfo?.position}
          </Text>
        </Box>
        <Divider
          orientation="horizontal"
          color={'rgba(0,0,0,0.08)'}
          mt="0.5rem"
        />
        <Flex p={'1.2rem 1rem'} flexDir="column" width={'100%'} gap="0.5rem">
          <Flex
            justifyContent={'space-between'}
            color={'rgba(0, 0, 0, 0.6)'}
            fontWeight={'600'}
            fontSize="1.2rem"
          >
            <Text>Who's viewed your profile </Text>
            <Text color={'rgb(10, 102, 194)'}>
              {Math.floor(Math.random() * 80)}
            </Text>
          </Flex>
          <Flex
            justifyContent={'space-between'}
            color={'rgba(0, 0, 0, 0.6)'}
            fontWeight={'600'}
            fontSize="1.2rem"
          >
            <Text>Impressions of your post</Text>
            <Text color={'rgb(10, 102, 194)'}>
              {Math.floor(Math.random() * 300)}
            </Text>
          </Flex>
        </Flex>
        <Divider
          orientation="horizontal"
          color={'rgba(0,0,0,0.08)'}
          mt="0.5rem"
        />
        <Box
          width={'100%'}
          p={'2rem 1rem'}
          justifyContent={'space-between'}
          color={'rgba(0, 0, 0, 0.6)'}
          fontSize="1.2rem"
        >
          <Text>Access exclusive tools and insights</Text>
          <Text color={'rgba(0, 0, 0, 0.9)'} fontWeight={'600'}>
            Get Hired Faster, Try Premium Free
          </Text>
        </Box>
        <Divider
          orientation="horizontal"
          color={'rgba(0,0,0,0.08)'}
          mt="0.5rem"
        />
        <Flex
          width={'100%'}
          p={'1rem'}
          color={'rgba(0, 0, 0, 0.6)'}
          alignItems="center"
          fontSize="1.2rem"
          gap={'1rem'}
          cursor="pointer"
        >
          <BsFillBookmarkFill color={'rgba(0, 0, 0, 0.7)'} size={18} />
          <Text color={'rgba(0, 0, 0, 0.7)'} fontWeight={'600'}>
            My Items
          </Text>
        </Flex>
      </Flex>
      <Flex
        borderRadius="8px"
        width={'22.5rem'}
        flexDir="column"
        height={'auto'}
        alignItems="center"
        bgColor={'#fff'}
        boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        position={'sticky'}
        top="8rem"
      >
        <Flex p={'1rem'} flexDir="column" gap={'0.3rem'} width="100%">
          <Text
            color={'rgb(10, 102, 194)'}
            fontWeight={'600'}
            fontSize="1.2rem"
          >
            Recent
          </Text>
          {trendingArr.map((i) => (
            <Flex
              key={i.id}
              color={'rgba(0, 0, 0, 0.6)'}
              fontWeight={'600'}
              fontSize="1.2rem"
              alignItems={'center'}
              gap="1rem"
            >
              <CgHashtag size={18} /> {i.text}
            </Flex>
          ))}
        </Flex>
        <Flex p={'1rem'} flexDir="column" gap={'0.3rem'} width="100%">
          <Text
            color={'rgb(10, 102, 194)'}
            fontWeight={'600'}
            fontSize="1.2rem"
          >
            Groups
          </Text>
          {trendingArr.map((i) => (
            <Flex
              key={i.id}
              color={'rgba(0, 0, 0, 0.6)'}
              fontWeight={'600'}
              fontSize="1.2rem"
              alignItems={'center'}
              gap="1rem"
            >
              <CgHashtag size={18} /> {i.text}
            </Flex>
          ))}
        </Flex>
        <Flex p={'1rem'} flexDir="column" gap={'0.3rem'} width="100%">
          <Text
            color={'rgb(10, 102, 194)'}
            fontWeight={'600'}
            fontSize="1.2rem"
          >
            Followed Hashtags
          </Text>
          {trendingArr.map((i) => (
            <Flex
              key={i.id}
              color={'rgba(0, 0, 0, 0.6)'}
              fontWeight={'600'}
              fontSize="1.2rem"
              alignItems={'center'}
              gap="1rem"
            >
              <CgHashtag size={18} /> {i.text}
            </Flex>
          ))}
        </Flex>
        <Divider
          orientation="horizontal"
          color={'rgba(0,0,0,0.08)'}
          mt="0.5rem"
        />
        <Text
          textAlign={'center'}
          cursor="pointer"
          p="1rem"
          color={'rgba(0, 0, 0, 0.6)'}
          fontWeight={'600'}
          fontSize="1.4rem"
        >
          Discover more
        </Text>
      </Flex>
    </Flex>
  );
}

export default LeftAside;
