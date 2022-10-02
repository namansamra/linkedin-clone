import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { BsImage, BsFillPlayBtnFill } from 'react-icons/bs';
import LeftAside from '../Aside/LeftAside';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoBriefcase } from 'react-icons/io5';
import RightAside from '../Aside/RightAside';
import { useGlobalStore } from '../../store/store';
import { CgPlayListAdd } from 'react-icons/cg';
import { Navbar } from '../Navbar';
import { PostCreator } from '../PostCreator';

function Layout({ children, styleProps = {} }) {
  const userInfo = useGlobalStore((state) => state.appState.userInfo);
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box maxWidth="100vw" minHeight="100vh" bgColor={'rgba(243,242,238,0.8)'}>
      <Navbar />
      <Flex
        justifyContent="center"
        width="100%"
        height={'100%'}
        p={'0 0.5rem'}
        paddingTop="8rem"
        gap={'2rem'}
      >
        <LeftAside />
        <Flex
          flexDir={'column'}
          gap="1.5rem"
          width={{ base: '98%', md: '80%', lg: '54rem' }}
        >
          <Flex
            borderRadius="8px"
            flexDir="column"
            bgColor={'#fff'}
            boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            p={{ base: '1rem', md: '1rem 2rem' }}
          >
            <Flex alignItems={'center'} gap="1rem">
              <Image
                boxSize={'4rem'}
                borderRadius="full"
                src={userInfo?.avatar}
                fit={'cover'}
                referrerpolicy="no-referrer"
              />
              <Button
                flex={1}
                fontSize={{ base: '1.2rem', md: '1.4rem' }}
                justifyContent="flex-start"
                border="1px solid rgba(0,0,0,0.2)"
                color={'rgba(0,0,0,0.6)'}
                fontWeight="600"
                padding={'2rem'}
                pl="1.6rem"
                borderRadius={'3.5rem'}
                bgColor="#fff"
                onClick={onOpen}
              >
                Share what you are learning these days
              </Button>
              <PostCreator isOpen={isOpen} onClose={onClose} />
            </Flex>
            <Flex
              bgColor={'#fff'}
              pt={'1rem'}
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Button
                fontSize={{ base: '1.2rem', md: '1.4rem' }}
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
              >
                Photo
              </Button>
              <Button
                fontSize={{ base: '1.2rem', md: '1.4rem' }}
                color={'rgba(0,0,0,0.6)'}
                fontWeight="600"
                padding={'1rem'}
                pl="1.6rem"
                borderRadius={'0.5rem'}
                bgColor="#fff"
                leftIcon={<BsFillPlayBtnFill size={'1.8rem'} color="#5f9b41" />}
                justifyContent="left"
                minW={0}
                width={'max-content'}
                minHeight="4.8rem"
              >
                Video
              </Button>
              <Button
                fontSize={{ base: '1.2rem', md: '1.4rem' }}
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
              >
                Jobs
              </Button>
              <Button
                fontSize={{ base: '1.2rem', md: '1.4rem' }}
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
              >
                Write Article
              </Button>
            </Flex>
          </Flex>
          <Flex alignItems={'center'}>
            <Divider
              orientation="horizontal"
              sx={{ borderColor: 'rgba(0,0,0,0.2) !important' }}
            />
            <Flex
              minW={'max-content'}
              alignItems="center"
              fontSize={'1.2rem'}
              pl="0.5rem"
              cursor={'pointer'}
            >
              <Text as={'span'}>Sort by:</Text>
              <Text as={'span'} fontWeight="600">
                Top
              </Text>
              <AiFillCaretDown />
            </Flex>
          </Flex>
          {children}
        </Flex>

        <RightAside />
      </Flex>
    </Box>
  );
}

export default Layout;
