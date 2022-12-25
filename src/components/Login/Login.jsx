import { Button, Divider, Flex, Input, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_USER_SIGNIN } from '../../utils/mutation';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalStore } from '../../store/store';
import { FcGoogle } from 'react-icons/fc';
import { PuffLoader } from 'react-spinners';

function Login() {
  const [userSignIn, { data, loading, error }] =
    useMutation(MUTATION_USER_SIGNIN);
  const setUserInfo = useGlobalStore((state) => state.setUserInfo);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      userSignIn({
        context: {
          headers: {
            authorization: codeResponse.code,
            'x-auth-type': 'code',
          },
        },
      });
    },
    flow: 'auth-code',
  });

  useEffect(() => {
    if (data && data.signInUser) {
      localStorage.setItem('access_token', data.signInUser.access_token);
      setUserInfo(data.signInUser);
      // setTimeout(() => {
      if (data.signInUser?.otherInfoFilled) {
        navigate('/home');
        return;
      } else {
        navigate('/userprofileform');
        return;
      }
      // }, 100);
    }
  }, [data]);

  if (loading) {
    return (
      <Flex
        width={'100%'}
        padding={'40px'}
        gap="20px"
        flexDir={'column'}
        alignItems={'center'}
        justifyContent="center"
        height={'100vh'}
      >
        <PuffLoader color="#36d7b7" />
      </Flex>
    );
  }
  return (
    <Flex
      height={'100vh'}
      width="100vw"
      bgColor={'#f6f6f6'}
      alignItems="center"
      justifyContent="center"
      flexDirection={'column'}
    >
      <Flex padding={'2rem'} flexDir="column" maxWidth={'43rem'} width="100%">
        <Text
          fontSize={{ base: '2rem', md: '5rem' }}
          color="#8f5849"
          fontWeight={300}
          lineHeight="1.1"
          m="2rem 0rem"
        >
          Welcome to your professional community
        </Text>

        <Flex
          onClick={login}
          padding="12px"
          alignItems={'center'}
          bg="white"
          borderRadius="10"
          width={'100%'}
          justifyContent="center"
          cursor={'pointer'}
          _hover={{ shadow: '2xl' }}
          fontWeight="500"
          fontSize={'16px'}
          color="#111"
          shadow={'md'}
        >
          Sign in with
          <FcGoogle size={25} style={{ marginLeft: '10px' }} />
        </Flex>
        {/* <Flex alignItems={'center'} width="100%" mt={'2rem'}>
          <Divider orientation="horizontal" />
          <Text color={'#ababab'}>Or</Text>
          <Divider orientation="horizontal" />
        </Flex>
        <Flex flexDir="column" gap={'1.2rem'}>
          <Input
            placeholder="Email or phone number"
            height={'4.8rem'}
            color="rgba(0,0,0,0.9)"
            border={'1px solid rgba(0,0,0,0.9)'}
            fontWeight="400"
            borderRadius={'2px'}
            outline="none"
            fontSize={'1.6rem'}
          />
          <Input
            placeholder="Password"
            type={'password'}
            height={'4.8rem'}
            color="rgba(0,0,0,0.9)"
            border={'1px solid rgba(0,0,0,0.9)'}
            fontWeight="400"
            borderRadius={'2px'}
            outline="none"
            fontSize={'1.6rem'}
          />
          <Button
            bgColor={'#2977c9'}
            width="100%"
            height={'5.6rem'}
            borderRadius={'2.8rem'}
            color="#fff"
            fontSize="2rem"
            mt={'1rem'}
            disabled
          >
            Sign In
          </Button>
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default Login;
