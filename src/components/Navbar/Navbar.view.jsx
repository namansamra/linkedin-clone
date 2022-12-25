import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsLinkedin, BsFillCaretDownFill } from 'react-icons/bs';
import { MdOutlineSearch } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { AiFillHome, AiOutlineAppstore, AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { MdGroup } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router';
import { IoNotificationsSharp } from 'react-icons/io5';
import { useGlobalStore } from '../../store/store';
import { logOut } from '../../utils/commonFunctions';

const options = [
  {
    id: 1,
    name: 'Home',
    path: '/home',
    icon: <AiFillHome size={25} />,
  },
  {
    id: 2,
    name: 'My Network',
    path: '/network',
    icon: <MdGroup size={25} />,
  },
  {
    id: 3,
    name: 'Saved Posts',
    path: '/savedPosts',
    icon: <AiOutlineHeart size={25} />,
  },
  {
    id: 4,
    name: 'Jobs',
    path: '/jobs',
    icon: <FaBriefcase size={25} />,
  },
  {
    id: 5,
    name: 'Notifications',
    path: '/notifications',
    icon: <IoNotificationsSharp size={25} />,
  },
];

const NavbarView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = useGlobalStore((state) => state.appState.userInfo);
  return (
    <Flex
      bgColor={'#fff'}
      height="5.5rem"
      position={'fixed'}
      top="0"
      left={'0'}
      right="0"
      borderBottom={'1px solid #e8e8e8'}
      zIndex="100"
      as={'header'}
      justifyContent="center"
      padding={{ base: '0 1rem' }}
      alignItems="center"
    >
      <Flex
        width={'1158px'}
        margin="0 auto"
        justifyContent={'space-between'}
        alignItems="center"
      >
        <Flex alignItems={'center'} gap="1rem">
          <BsLinkedin color="#0a66c2" size={40} />
          <InputGroup
            alignItems={'center'}
            display={{ base: 'none', md: 'block' }}
          >
            <InputLeftElement
              pointerEvents="none"
              left={'1rem'}
              top="0.7rem"
              children={<MdOutlineSearch color="gray.300" size={'20'} />}
            />
            <Input
              bgColor={'#eef3f8'}
              placeholder="Search"
              height={'3.8rem'}
              width="25rem"
              pl={'4rem'}
              fontSize={'14px'}
            />
          </InputGroup>
        </Flex>
        <Flex gap={'1.5rem'} alignItems="center" height={'100%'}>
          {options.map((option) => (
            <Flex
              key={option.id}
              flexDirection="column"
              color={
                location.pathname == option.path
                  ? 'rgba(0,0,0,0.9)'
                  : 'rgba(0,0,0,0.6)'
              }
              _hover={{
                color: 'rgba(0,0,0,0.9)',
              }}
              transition={'border 0.2s ease-in'}
              cursor="pointer"
              alignItems={'center'}
              onClick={() => {
                navigate(option.path);
              }}
              borderBottom={{
                md:
                  location.pathname == option.path
                    ? '2px solid rgba(0,0,0,0.9)'
                    : 'none',
              }}
              height={'100%'}
              pt={{ md: '0.8rem' }}
              minW={{ base: '4rem', md: '7rem' }}
              fontSize="1.3rem"
              fontWeight={'500'}
            >
              {option.icon}
              <Text as={'span'} display={{ base: 'none', md: 'inline-block' }}>
                {option.name}
              </Text>
            </Flex>
          ))}

          <Menu>
            <MenuButton>
              <Flex
                flexDirection="column"
                color={
                  location.pathname == 'profile'
                    ? 'rgba(0,0,0,0.9)'
                    : 'rgba(0,0,0,0.6)'
                }
                _hover={{
                  color: 'rgba(0,0,0,0.9)',
                }}
                cursor="pointer"
                alignItems={'center'}
                onClick={() => {}}
                transition={'border-width 0.2s ease-in'}
                height={'100%'}
                pt={{ md: '0.8rem' }}
                minW={{ base: '4rem', md: '7rem' }}
                fontSize="1.3rem"
                fontWeight={'500'}
              >
                <Image
                  boxSize={'2.5rem'}
                  borderRadius="full"
                  src={userInfo?.avatar}
                  fit={'cover'}
                  referrerpolicy="no-referrer"
                />
                <Flex
                  alignItems={'center'}
                  display={{ base: 'none', md: 'flex' }}
                >
                  Me <BsFillCaretDownFill />
                </Flex>
              </Flex>
            </MenuButton>
            <MenuList fontSize={16} padding="8px 0px">
              <MenuItem p="5px 10px">
                <Flex flexDir={'column'} gap="10px" width={'100%'}>
                  <Flex gap={'10px'}>
                    <Image
                      boxSize={'4.8rem'}
                      borderRadius="full"
                      src={userInfo?.avatar}
                      fit={'cover'}
                      referrerpolicy="no-referrer"
                    />
                    <Flex flexDirection={'column'} overflow="hidden" w={'100%'}>
                      <Text
                        fontSize={'1.4rem'}
                        fontWeight="600"
                        color={'rgba(0,0,0,0.9)'}
                      >
                        {userInfo.name}
                      </Text>
                      <Text
                        fontSize={'1.2rem'}
                        color={'rgba(0,0,0,0.6)'}
                        whiteSpace="nowrap"
                        textOverflow={'ellipsis'}
                        overflow="hidden"
                      >
                        {userInfo.position
                          ? userInfo.position
                          : 'Former Full Stack Developer'}
                      </Text>
                    </Flex>
                  </Flex>
                  <Button
                    bgColor={'white'}
                    border="2px solid rgb(10, 102, 194)"
                    borderRadius={'10px'}
                    padding="12px 20px"
                    width={'full'}
                    color="rgb(10, 102, 194)"
                    fontSize={'14px'}
                    fontWeight="600"
                    _hover={{ backgroundColor: 'white' }}
                    onClick={() => navigate('/profile')}
                  >
                    View Profile
                  </Button>
                </Flex>
              </MenuItem>
              <MenuGroup title="Account" fontSize={'14px'}>
                <MenuItem p="8px 10px" pl="20px">
                  Setting and Privacy
                </MenuItem>
                <MenuItem p="8px 10px" pl="20px">
                  Payments
                </MenuItem>
                <MenuItem p="8px 10px" pl="20px">
                  Help
                </MenuItem>
              </MenuGroup>

              <MenuGroup title="Manage" fontSize={'14px'}>
                <MenuItem p="8px 10px" pl="20px">
                  Post & Activity
                </MenuItem>
                <MenuItem p="8px 10px" pl="20px">
                  Job Posting
                </MenuItem>
              </MenuGroup>
              <MenuItem p="8px 10px" onClick={logOut} fontWeight="600">
                Log Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavbarView;
