import React, { useState } from 'react';
import {
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useGlobalStore } from '../../store/store';
import { FaGlobeAmericas } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'; // ES6
import { IoBriefcase } from 'react-icons/io5';
import { CgPlayListAdd } from 'react-icons/cg';
import { BsFillPlayBtnFill, BsImage } from 'react-icons/bs';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_POST } from '../../utils/mutation';
import { QUERY_GET_ALL_POSTS } from '../../utils/query';

function PostCreatorView({ isOpen, onClose }) {
  const userInfo = useGlobalStore((state) => state.appState.userInfo);
  const [addPost, { data, loading, error }] = useMutation(MUTATION_ADD_POST, {
    refetchQueries: [{ query: QUERY_GET_ALL_POSTS }],
  });
  const [body, setBody] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const createPostHandler = () => {
    if (!body) {
      return;
    }
    addPost({
      variables: {
        input: {
          body: body,
          createdAt: new Date().toString(),
          image: imageLink,
        },
      },
    });

    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay padding="1rem" />
      <ModalContent borderRadius={'1rem'} margin="1rem">
        <ModalHeader
          fontSize={'2rem'}
          color="rgba(0,0,0,0.9)"
          borderBottom={'1px solid #e8e8e8'}
          fontWeight="500"
        >
          Create a post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody width={'100%'}>
          <Flex p={'1rem 0rem'} alignItems="center">
            <Image
              boxSize={'4rem'}
              borderRadius="full"
              src={userInfo?.avatar}
              fit={'cover'}
              referrerpolicy="no-referrer"
            />
            <VStack ml={'0.8rem'} alignItems="center" spacing={'0.4rem'}>
              <Text
                fontSize={'1.6rem'}
                fontWeight="600"
                color="rgba(0,0,0,0.8)"
              >
                {userInfo?.name}
              </Text>
              <Button
                leftIcon={<FaGlobeAmericas color="3e7e7e7" />}
                rightIcon={<AiOutlineCaretDown color="3e7e7e7" />}
                boxShadow="inset 0 0 0 1px rgba(0,0,0,0.6)"
                bgColor={'#fff'}
                padding="1.5rem"
                borderRadius={'1.5rem'}
                fontSize={'1.4rem'}
                color="rgba(0,0,0,0.6)"
              >
                Anyone
              </Button>
            </VStack>
          </Flex>

          <ReactQuill
            preserveWhitespace={true}
            theme={null}
            value={body}
            onChange={setBody}
            placeholder={'Write something awesome...'}
            style={{ maxHeight: '400px', overflowY: 'scroll' }}
          ></ReactQuill>
          {showImageInput && (
            <Input
              placeholder="Enter Image url"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              width="90%"
              padding={'1.5rem'}
              ml="1.5rem"
            />
          )}
          <ModalFooter>
            <Flex
              bgColor={'#fff'}
              pt={'1rem'}
              alignItems="center"
              width={'100%'}
              justifyContent="space-between"
            >
              <div>
                <Button
                  fontSize="1.4rem"
                  color={'rgba(0,0,0,0.6)'}
                  fontWeight="600"
                  padding={'1rem'}
                  borderRadius={'0.5rem'}
                  bgColor="#fff"
                  leftIcon={<BsImage size={'1.8rem'} color="#378fe9" />}
                  justifyContent="left"
                  minW={0}
                  width={'max-content'}
                  minHeight="4.8rem"
                  onClick={() => setShowImageInput((prev) => !prev)}
                />

                <Button
                  fontSize="1.4rem"
                  color={'rgba(0,0,0,0.6)'}
                  fontWeight="600"
                  padding={'1rem'}
                  pl="1.6rem"
                  borderRadius={'0.5rem'}
                  bgColor="#fff"
                  leftIcon={
                    <BsFillPlayBtnFill size={'1.8rem'} color="#5f9b41" />
                  }
                  justifyContent="left"
                  minW={0}
                  width={'max-content'}
                  minHeight="4.8rem"
                />

                <Button
                  fontSize="1.4rem"
                  color={'rgba(0,0,0,0.6)'}
                  fontWeight="600"
                  padding={'1rem'}
                  pl="1.6rem"
                  borderRadius={'0.5rem'}
                  bgColor="#fff"
                  leftIcon={<IoBriefcase size={'1.8rem'} color="#a872e8" />}
                  justifyContent="left"
                  minW={0}
                  width={'max-content'}
                  minHeight="4.8rem"
                />
                <Button
                  fontSize="1.4rem"
                  color={'rgba(0,0,0,0.6)'}
                  fontWeight="600"
                  padding={'1rem'}
                  pl="1.6rem"
                  borderRadius={'0.5rem'}
                  bgColor="#fff"
                  leftIcon={<CgPlayListAdd size={'1.8rem'} color="#e16745" />}
                  justifyContent="left"
                  minW={0}
                  width={'max-content'}
                  minHeight="4.8rem"
                />
              </div>
              <Button
                padding={'1.5rem'}
                fontSize="1.6rem"
                fontWeight={'600'}
                bgColor="#0a66c2"
                color="#fff"
                borderRadius={'1.6rem'}
                onClick={createPostHandler}
              >
                Post
              </Button>
            </Flex>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PostCreatorView;
