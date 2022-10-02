import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import { useGlobalStore } from '../../store/store';
const linkedNews = [
  {
    id: 0,
    heading: 'The Top Voices freshers should follow',
    timeline: 'Top News',
    readers: '102090',
  },
  {
    id: 1,
    heading: 'More Layoffs in Indian edtech',
    timeline: '1d ago',
    readers: '102090',
  },
  {
    id: 2,
    heading: 'Techies dumps startups for IT firms',
    timeline: '2d ago',
    readers: '12342',
  },
  {
    id: 3,
    heading: 'Topics freshers should know',
    timeline: '5d ago',
    readers: '13390',
  },
  {
    id: 4,
    heading: 'Tips to negotiate your salary',
    timeline: '7d ago',
    readers: '102220',
  },
  {
    id: 5,
    heading: 'The Top Voices in India',
    timeline: '1d ago',
    readers: '20990',
  },
];

function RightAside() {
  const userInfo = useGlobalStore((state) => state.appState.userInfo);
  return (
    <Flex
      flexDir="column"
      gap={'2rem'}
      width={'31.5rem'}
      display={{ base: 'none', md: 'none', lg: 'flex' }}
    >
      <Flex
        borderRadius="8px"
        flexDir="column"
        bgColor={'#fff'}
        boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        p={'1rem 0'}
      >
        <Text
          color={'rgba(0,0,0,0.9)'}
          p="0 1rem"
          fontSize="16px"
          fontWeight={'600'}
        >
          LinkedIn News
        </Text>
        {linkedNews.map((i) => (
          <Flex
            key={i.id}
            flexDir="column"
            cursor={'pointer'}
            _hover={{ bgColor: '#e9e9e9' }}
            p="0.8rem 1rem"
          >
            <Flex alignItems={'flex-start'}>
              <Box
                as={'span'}
                borderRadius="50%"
                minWidth={'0.6rem'}
                minHeight="0.6rem"
                backgroundColor={'rgba(0,0,0,0.6)'}
                m="0.7rem"
              ></Box>
              <Text
                fontSize={'1.4rem'}
                color="rgba(0,0,0,0.9)"
                pl="1rem"
                fontWeight={'600'}
              >
                {i.heading}
              </Text>
            </Flex>
            <Flex
              alignItems={'center'}
              gap="0.2rem"
              fontSize={'1.2rem'}
              color="rgba(0,0,0,0.9)"
              pl="3.2rem"
            >
              <Text>{i.timeline}</Text>
              <Flex alignItems={'center'}>
                <Box
                  as={'span'}
                  borderRadius="50%"
                  minWidth={'0.6rem'}
                  minHeight="0.6rem"
                  backgroundColor={'rgba(0,0,0,0.6)'}
                  m="0.7rem"
                ></Box>
                {Number(i.readers).toLocaleString('en-US', {
                  maximumFractionDigits: 2,
                })}{' '}
                readers
              </Flex>
            </Flex>
          </Flex>
        ))}
        <Accordion allowToggle>
          <AccordionItem border={'none !important'}>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  width={'max-content'}
                  ml="3.2rem"
                  borderRadius={'2rem'}
                >
                  <Text
                    flex="1"
                    textAlign="left"
                    color={'rgba(0,0,0,0.6)'}
                    fontSize="16px"
                    fontWeight={'600'}
                  >
                    {!isExpanded ? 'Show More' : 'Show Less'}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel p={0} pb={4}>
                  {linkedNews.slice(3).map((i) => (
                    <Flex
                      key={i.id}
                      flexDir="column"
                      cursor={'pointer'}
                      _hover={{ bgColor: '#e9e9e9' }}
                      p="0.8rem 1rem"
                    >
                      <Flex alignItems={'flex-start'}>
                        <Box
                          as={'span'}
                          borderRadius="50%"
                          minWidth={'0.6rem'}
                          minHeight="0.6rem"
                          backgroundColor={'rgba(0,0,0,0.6)'}
                          m="0.7rem"
                        ></Box>
                        <Text
                          fontSize={'1.4rem'}
                          color="rgba(0,0,0,0.9)"
                          pl="1rem"
                          fontWeight={'600'}
                        >
                          {i.heading}
                        </Text>
                      </Flex>
                      <Flex
                        alignItems={'center'}
                        gap="0.2rem"
                        fontSize={'1.2rem'}
                        color="rgba(0,0,0,0.9)"
                        pl="3.2rem"
                      >
                        <Text>{i.timeline}</Text>
                        <Flex alignItems={'center'}>
                          <BsDot size={'1.5rem'} color="rgba(0,0,0,0.6)" />
                          {Number(i.readers).toLocaleString('en-US', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          readers
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Flex>
      <Flex
        borderRadius="8px"
        flexDir="column"
        bgColor={'#fff'}
        boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        p={'1rem'}
        alignItems="center"
        position={'sticky'}
        top="8rem"
      >
        <Text fontSize={'1.2rem'} mt="1.6rem">
          Get the latest jobs and industry news
        </Text>
        <Flex
          alignItems={'center'}
          justifyContent="center"
          gap={'1rem'}
          mt="1rem"
          color={'rgba(0,0,0,0.7)'}
          fontWeight="400"
          p={'1rem'}
        >
          <Image
            boxSize={'7rem'}
            borderRadius="full"
            src={userInfo?.avatar}
            fit={'cover'}
            referrerpolicy="no-referrer"
          />
          <Image
            boxSize={'7rem'}
            borderRadius="full"
            src={'/random.jpeg'}
            fit={'cover'}
          />
        </Flex>
        <Text textAlign={'center'} fontSize="1.5rem">
          {userInfo?.name}, explore relevant opportunites with{' '}
          <Text as={'span'} fontWeight="600" color={'rgba(0,0,0,0.9)'}>
            Genepact
          </Text>
        </Text>

        <Button
          bgColor={'white'}
          border="1px solid rgb(10, 102, 194)"
          color={'rgb(10, 102, 194)'}
          fontWeight="600"
          fontSize={'1.5rem'}
          borderRadius="1.6rem"
          padding={'1.5rem'}
          mt="1rem"
          _hover={{
            boxShadow: 'rgb(10 102 194) 0px 0px 0px 1px inset',
          }}
        >
          Follow
        </Button>
      </Flex>
    </Flex>
  );
}

export default RightAside;
