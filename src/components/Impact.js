

import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Icon,
} from '@chakra-ui/react';
// import { Code, ExternalLink } from '@chakra-ui/react';
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoSchoolOutline, IoBuildOutline, IoPeopleOutline } from 'react-icons/io5';

const Impact = () => {
  return (
    <Box  mx="auto" py={8} px={4} bg={"#000001"} color={"#fff"}>
      <Heading px={10} as="h2" size="2xl" mb={6} textAlign={"center"}  lineHeight={"3em"}>
        Evolving Education: Learning Through Gaming
      </Heading>
      <Text mb={8} px={10}>
        Traditional learning methods often lack engagement, leading to lower
        retention rates. Studies have shown that incorporating game mechanics
        into the learning process can significantly improve motivation, knowledge
        retention, and problem-solving skill. Aziy embraces this approach,
        seamlessly integrating Web3 technologies behind the scenes to deliver a
        rewarding learning experience without overwhelming users with complex
        concepts. This empowers players to:
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        <GridItem >
          <Box bg={"#000019"}p={4} borderRadius="lg" border={"0.07px solid #757573"}>
            <List spacing={3}>
              <ListItem>
                <ListIcon>
                  <Icon as={IoSchoolOutline} color="teal.500" />
                </ListIcon>
                <ListItem>
                  <ListItem>Master Coding Fundamentals</ListItem>
                  <Text fontSize="sm">
                    Develop a strong foundation in coding concepts through
                    interactive challenges and game mechanics.
                  </Text>
                </ListItem>
              </ListItem>
              <ListItem>
                <ListIcon>
                  <Icon as={HiOutlineLightBulb} color="teal.500" />
                </ListIcon>
                <ListItem>
                  <ListItem>Sharpen Problem-Solving Skills</ListItem>
                  <Text fontSize="sm">
                    Level up your critical thinking and creative problem-solving
                    abilities by overcoming in-game obstacles.
                  </Text>
                </ListItem>
              </ListItem>
            </List>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg={"#000019"}p={4} borderRadius="lg" border={"0.07px solid #757573"}>
            <List spacing={3}>
              <ListItem>
                <ListIcon>
                  <Icon as={IoBuildOutline} color="teal.500" />
                </ListIcon>
                <ListItem>
                  <ListItem>Become a Web3 Developer</ListItem>
                  <Text fontSize="sm">
                    Gain practical experience with Web3 technologies by
                    building your own in-game assets and interacting with the
                    blockchain.
                  </Text>
                </ListItem>
              </ListItem>
              <ListItem>
                <ListIcon>
                  <Icon as={IoPeopleOutline} color="teal.500" />
                </ListIcon>
                <ListItem>
                  <ListItem>Connect with the Web3 Community</ListItem>
                  <Text fontSize="sm">
                    Join a network of passionate creators and learners,
                    fostering collaboration and knowledge exchange within the
                    Web3 ecosystem.
                  </Text>
                </ListItem>
              </ListItem>
            </List>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Impact;

