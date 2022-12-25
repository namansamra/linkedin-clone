import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import {
  MUTATION_ADD_COMMENT,
  MUTATION_ADD_LIKE,
  MUTATION_REMOVE_LIKE,
  MUTATION_SAVE_POST,
  MUTATION_UNSAVE_POST,
} from '../../utils/mutation';
import { BiDotsHorizontalRounded, BiSave, BiShareAlt } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import parse from 'html-react-parser';
import { useGlobalStore } from '../../store/store';
import { QUERY_GET_ALL_POSTS, QUERY_GET_SAVED_POSTS } from '../../utils/query';
const emotions = [
  'https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt',
  'https://static-exp1.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus',
  'https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22',
];

const specific = [
  'Virat Kohli',
  'Rohit Sharma',
  'Hardik Pandya',
  'Ravichandran Ashwin',
  'Ravindra Jadeja',
  'Cheteshwar Pujara',
  'Ajinkya Rahane',
  'Shikhar Dhawan',
  'KL Rahul',
  'C Green',
  'MS Harris',
  'JR Hazlewood',
  'M Labuschagne',
  'NM Lyon',
  'TD Paine',
  'SPD Smith',
  'MA Starc',
  'MS Wade',
  'DA Warner',
];
function PostView({ post, isSavedPostsScreen }) {
  const [addLike] = useMutation(MUTATION_ADD_LIKE, {
    refetchQueries: [{ query: QUERY_GET_ALL_POSTS }],
  });
  const [savePost] = useMutation(MUTATION_SAVE_POST, {
    refetchQueries: [{ query: QUERY_GET_SAVED_POSTS }],
  });
  const [unsavePost] = useMutation(MUTATION_UNSAVE_POST, {
    refetchQueries: [{ query: QUERY_GET_SAVED_POSTS }],
  });
  const [removeLike] = useMutation(MUTATION_REMOVE_LIKE, {
    refetchQueries: [{ query: QUERY_GET_ALL_POSTS }],
  });
  const [addComment] = useMutation(MUTATION_ADD_COMMENT, {
    refetchQueries: [{ query: QUERY_GET_ALL_POSTS }],
  });
  const userInfo = useGlobalStore((state) => state.appState.userInfo);
  const [showAddComment, setShowAddComment] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [comment, setComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [indexForLikePerson] = useState(
    Math.floor(Math.random() * specific.length)
  );
  // console.log(userInfo, post);

  console.log(userInfo?.savedPosts);
  const buttomButtons = React.useMemo(
    () => [
      {
        id: Math.random() * 1000,
        title: 'Like',
        handler: () => {
          setIsLiked((prev) => !prev);

          isLiked
            ? removeLike({ variables: { id: post.id } })
            : addLike({
                variables: {
                  input: {
                    postId: post.id,
                  },
                },
              });
        },
        icon: isLiked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="like-creation-medium"
            data-supported-dps="24x24"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12.69 9.5H5.06a1.8 1.8 0 00-1.56 2A1.62 1.62 0 005.15 13h.29a1.38 1.38 0 00-1.34 1.39 1.43 1.43 0 001.31 1.42A1.42 1.42 0 006 18.35a1.45 1.45 0 00-.15 1 1.51 1.51 0 001.51 1.12h4.08a6.3 6.3 0 001.56-.2l2.56-.75h3.38c1.78-.07 2.26-8.26 0-8.26h-1c-.17 0-.27-.34-.71-.82-.65-.71-1.39-1.62-1.91-2.13a12.62 12.62 0 01-3-3.92C11.9 3.42 11.85 3 11 3a1.38 1.38 0 00-1.21 1.45c0 .25.13 1.12.18 1.43a10.6 10.6 0 001.76 3.62"
                fill="#378fe9"
                fill-rule="evenodd"
              />
              <path
                d="M5.06 10a1.42 1.42 0 00-1.56 1.5A1.6 1.6 0 005.15 13h.29a1.37 1.37 0 00-1.34 1.41 1.43 1.43 0 001.31 1.42A1.42 1.42 0 006 18.37a1.45 1.45 0 00-.15 1 1.53 1.53 0 001.52 1.13h4.08a6.8 6.8 0 001.55-.21l2.56-.75h3.38c1.78-.07 2.26-8.26 0-8.26h-1c-.17 0-.27-.34-.71-.82-.65-.71-1.39-1.62-1.91-2.13a12.62 12.62 0 01-3-3.92C11.9 3.44 11.85 3 11 3a1.29 1.29 0 00-.91.48 1.32 1.32 0 00-.3 1c0 .25.13 1.12.18 1.43A15.82 15.82 0 0011.73 10z"
                fill="none"
                stroke="#004182"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
          </svg>
        ),
      },
      {
        id: Math.random() * 1000,
        title: 'Comment',
        handler: () => {
          setShowAddComment((prev) => !prev);
        },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
          </svg>
        ),
      },
      {
        id: Math.random() * 1000,
        title: 'Share',
        handler: () => {},
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
          </svg>
        ),
      },
      {
        id: Math.random() * 1000,
        title: 'Send',
        handler: () => {},
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>
        ),
      },
    ],
    [post, isLiked]
  );

  const handleSubmitComment = (e) => {
    e.preventDefault();
    addComment({
      variables: {
        input: {
          body: comment,
          postId: post?.id,
        },
      },
    });
    setComment('');
  };
  return (
    <Flex
      flexDirection={'column'}
      borderRadius="0.8rem"
      bgColor={'#fff'}
      boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      padding={'10px 0'}
      width="99%"
      margin="10px 1px"
    >
      <Flex
        padding={'0px 15px'}
        flexDirection="column"
        gap={'1rem'}
        position={'relative'}
      >
        <Flex gap={'10px'} alignItems="center" lineHeight={'1.3'}>
          <Image
            boxSize={'4.8rem'}
            borderRadius="full"
            src={post.user.avatar}
            fit={'cover'}
          />
          <Flex
            justifyContent={'space-between'}
            alignItems="start"
            width={'100%'}
          >
            <Flex flexDirection={'column'} overflow="hidden">
              <Text
                fontSize={'1.4rem'}
                fontWeight="600"
                color={'rgba(0,0,0,0.9)'}
              >
                {post.user.name}
              </Text>
              <Text
                fontSize={'1.2rem'}
                color={'rgba(0,0,0,0.6)'}
                whiteSpace="nowrap"
                textOverflow={'ellipsis'}
                overflow="hidden"
              >
                {post.user.position}
              </Text>
              <Text fontSize={'1.2rem'} color={'rgba(0,0,0,0.6)'}>
                {Math.floor(Math.random() * 60)}m
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          as={'span'}
          whiteSpace={'pre-wrap'}
          fontSize={'1.4rem'}
          color={'rgba(0,0,0,0.9)'}
          fontWeight="500"
          wordBreak={'break-word'}
          wordwrap={'break-word'}
          overflow="hidden"
          width={'100%'}
        >
          {parse(post.body)}
        </Box>
        <Menu placement="left-start">
          <MenuButton
            borderRadius={'50%'}
            cursor="pointer"
            bgColor={'#fff'}
            position={'absolute'}
            top="-5px"
            right={'20px'}
            _hover={{ bgColor: '#e9e9e9' }}
          >
            <BiDotsHorizontalRounded size={30} color="grey" />
          </MenuButton>
          <MenuList
            fontSize={'14px'}
            position="absolute"
            right={'-30px'}
            top="30px"
          >
            {userInfo.id === post.user.id && (
              <MenuItem icon={<RiDeleteBinLine size={20} />}>Delete</MenuItem>
            )}
            <MenuItem
              icon={<BiSave size={20} />}
              onClick={() => {
                isSavedPostsScreen
                  ? unsavePost({ variables: { id: post.id } })
                  : savePost({ variables: { id: post.id } });
              }}
            >
              {isSavedPostsScreen ? 'Unsave Post' : 'Save Post'}
            </MenuItem>
            <MenuItem icon={<BiShareAlt size={20} />}>Share</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {post.image && (
        <Image
          marginTop={'1rem'}
          marginBottom="1rem"
          src={post?.image}
          fallbackSrc="https://media-exp1.licdn.com/dms/image/C4D22AQHJnTkYgXwPbw/feedshare-shrink_800/0/1652353164034?e=1655337600&v=beta&t=Jx8E0FrBAO-QOmjiLlIaOyke1wuENpSGS7GA5B_8_80"
        />
      )}
      <Flex
        margin={{ base: '0 1rem', md: '0px 1.5rem' }}
        flexDirection="column"
        gap={'0.6rem'}
        mt="1rem"
      >
        <Flex
          alignItems={'center'}
          justifyContent="space-between"
          borderBottom="1px solid #e8e8e8"
          paddingBottom={'0.8rem'}
        >
          <HStack spacing={'0.4rem'}>
            {emotions.map((src) => (
              <Image
                key={src}
                src={src}
                minHeight={'1.7rem'}
                minWidth="1.7rem"
              />
            ))}
            <Text ml={'1rem'} color="rgba(0, 0, 0, 0.6)" fontSize={'1.2rem'}>
              {specific[indexForLikePerson]} and {post.likes} others
            </Text>
          </HStack>
          {post.comments?.length > 0 && (
            <Text
              ml={'1rem'}
              color="rgba(0, 0, 0, 0.6)"
              fontSize={'1.2rem'}
              cursor="pointer"
              _hover={{ color: 'rgba(0,0,0,0.8)', textDecoration: 'underline' }}
              onClick={() => setShowAllComments((prev) => !prev)}
            >
              {post.comments.length} comments
            </Text>
          )}
        </Flex>
        <Flex gap={'0.4rem'}>
          {buttomButtons.map((btn) => (
            <Button
              key={btn.id}
              minHeight="3.5rem"
              height={'100%'}
              padding={{ base: '1rem 0.8rem', md: '1.2rem 1rem' }}
              color="rgba(0,0,0,0.6)"
              flex={1}
              fontSize={{ base: '1.2rem', md: '1.4rem' }}
              fontWeight={'600'}
              backgroundColor={'#fff'}
              _hover={{
                backgroundColor: 'rgba(0,0,0,0.08)',
              }}
              leftIcon={btn.icon}
              onClick={btn.handler}
            >
              {btn.title}
            </Button>
          ))}
        </Flex>
        {showAddComment && (
          <Flex p={'1rem 0rem'} bgColor="#fff" alignItems={'center'} gap="1rem">
            <Image
              boxSize={'4rem'}
              borderRadius="full"
              src={userInfo?.avatar}
              fit={'cover'}
            />
            <form onSubmit={handleSubmitComment} style={{ width: '100%' }}>
              <FormControl isRequired>
                <Input
                  placeholder="Add a comment..."
                  p="2rem"
                  borderRadius={'2rem'}
                  border="1px solid rgba(0,0,0,0.4) !important"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  color="rgba(0,0,0,0.9)"
                  fontSize={'1.4rem'}
                  name="input"
                  value={comment}
                  type="text"
                />
              </FormControl>
            </form>
          </Flex>
        )}
        {showAllComments &&
          post?.comments?.map((comment) => (
            <Flex
              bgColor="#fff"
              alignItems={'flex-start'}
              gap="1rem"
              key={comment.id}
              p="1rem 0rem"
            >
              <Image
                boxSize={'4rem'}
                borderRadius="full"
                src={comment?.userId?.avatar}
                fit={'cover'}
              />
              <Flex
                bgColor={'#f2f2f2'}
                width="100%"
                padding="1rem"
                borderRadius={'8px'}
                borderTopLeftRadius="none"
                color={'rgba(0,0,0,0.9)'}
                fontSize="1.4rem"
                flexDir={'column'}
                position={'relative'}
                mb="1rem"
              >
                <Flex flexDir={'column'} mb="1rem">
                  <Text fontWeight={'600'}>{comment.userId.name}</Text>
                  <Text color={'rgba(0,0,0,0.6)'} fontSize="1.2rem">
                    {comment.userId.position}
                  </Text>
                </Flex>
                <Text fontWeight={'400'} wordBreak="break-word">
                  {comment.body}
                </Text>
                <Flex
                  alignItems={'center'}
                  fontWeight="600"
                  fontSize={'1.2rem'}
                  color="rgba(0,0,0,0.6)"
                  position={'absolute'}
                  bottom="-20px"
                  cursor={'pointer'}
                >
                  Like
                  <Divider
                    orientation="vertical"
                    m={'0rem 1rem'}
                    color="red"
                    height={'1.5rem'}
                  />
                  Reply
                </Flex>
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}

export default PostView;
