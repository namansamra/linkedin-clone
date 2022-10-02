import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  position,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalStore } from '../../store/store';
import { MUTATION_USER_ADD_OTHER_INFO } from '../../utils/mutation';
import { Navbar } from '../Navbar';

function UserProfileForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useGlobalStore((state) => [
    state.appState.userInfo,
    state.setUserInfo,
  ]);

  const [formState, setFormState] = useState({
    name: '',
    position: '',
    company: '',
    about: '',
    password: '',
  });
  const [addOtherInfo, { loading, error }] = useMutation(
    MUTATION_USER_ADD_OTHER_INFO
  );

  const setValue = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formState.name == '' || formState.position == '') {
      return;
    }
    try {
      const { data } = await addOtherInfo({
        variables: {
          input: {
            ...formState,
          },
        },
      });
      setUserInfo({ ...userInfo, ...data.updateUser });
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      maxWidth="100vw"
      minHeight="100vh"
      bgColor={'rgba(243,242,238,0.8)'}
      display="flex"
      justifyContent={'center'}
      alignItems="center"
    >
      <Navbar />

      <form onSubmit={submitHandler}>
        <FormControl isRequired>
          <Flex
            minW={'50rem'}
            alignItems="center"
            justifyContent={'center'}
            margin="0rem auto"
            flexDir={'column'}
            padding="3rem"
            gap="1.2rem"
            bgColor={'#fff'}
            boxShadow="rgb(0 0 0 / 4%) 4px 4px 20px -4px"
            borderRadius={'10px'}
          >
            <Text
              fontWeight="700"
              fontSize="2.1rem"
              color={'gray.800'}
              mb="2rem"
            >
              Please enter your details
            </Text>
            <Input
              placeholder="Full name"
              name="name"
              boxShadow={'rgb(16 24 40 / 5%) 0px 1px 2px'}
              fontSize="1.4rem"
              padding={'1rem 1.4rem'}
              onChange={setValue}
              height="auto"
              value={formState.name}
            />
            <Input
              placeholder="Password"
              name="password"
              boxShadow={'rgb(16 24 40 / 5%) 0px 1px 2px'}
              fontSize="1.4rem"
              padding={'1rem 1.4rem'}
              onChange={setValue}
              height="auto"
              value={formState.password}
            />
            <Input
              placeholder="Position or experience e.g SDE@Paytm"
              name="position"
              boxShadow={'rgb(16 24 40 / 5%) 0px 1px 2px'}
              fontSize="1.4rem"
              padding={'1rem 1.4rem'}
              onChange={setValue}
              height="auto"
              value={formState.position}
            />
            <Input
              placeholder="Organization"
              name="company"
              boxShadow={'rgb(16 24 40 / 5%) 0px 1px 2px'}
              fontSize="1.4rem"
              padding={'1rem 1.4rem'}
              onChange={setValue}
              height="auto"
              value={formState.currentCompany}
            />
            <Input
              placeholder="About yourself"
              name="about"
              boxShadow={'rgb(16 24 40 / 5%) 0px 1px 2px'}
              fontSize="1.4rem"
              padding={'1rem 1.4rem'}
              onChange={setValue}
              height="auto"
              value={formState.about}
            />

            <Button
              mt={'2rem'}
              type="submit"
              width={'100%'}
              bgColor="rgb(55, 98, 221)"
              color="#fff"
              fontSize={'1.4rem'}
              padding="2.2rem"
              borderRadius={'0.8rem'}
              isLoading={loading}
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
}

export default UserProfileForm;
