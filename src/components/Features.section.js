import React from 'react';
import {
  Flex,
  Text,
  Grid,
  useMediaQuery,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faGamepad, faInstagram } from '@fortawesome/free-brands-svg-icons'

import GlassCard from './GlassCard'; // Import your GlassCard component

const FeatureCard = ({ title, icon, children }) => {
  return (
    <GlassCard>
      <Flex justifyContent="center" alignItems="center" mb={4} p={10}>
        {icon && <Icon fontSize="2xl" mr={4} color="teal.500" />}
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      {children}
    </GlassCard>
  );
};

const Features = () => {
  const [isLargerThanMd] = useMediaQuery('(min-width: md)'); // For responsive title

  const featureData = [
    {
      title: 'Immersive Gameplay',
      icon: <FontAwesomeIcon icon="fa-solid fa-gamepad" color='#fff' />,
      body: (
        <Text>
          Explore a stunning open world, conquer challenges, and play engaging mini-games; all while learning to code!
        </Text>
      ),
    },
    {
      title: 'Learning Redefined',
      icon: <Icon name="Eye" />,
      body: (
        <Text>
          Ditch textbooks! Aziy's interactive gameplay makes coding fun and rewarding. Build real projects with intuitive code blocks.
        </Text>
      ),
    },
    {
      title: 'Play and Earn',
      icon: <Icon name="Users" />,
      body: (
        <Text>
          Earn valuable in-game assets, mint them as NFTs (unique digital collectibles), and trade them on the Aziy marketplace.
        </Text>
      ),
    },
    {
      title: 'Create Your World',
      icon: <Icon name="Repeat" />,
      body: (
        <Text>
          Design your own game worlds, challenges, and mini-games with built-in tools. Share your creations and potentially earn rewards.
        </Text>
      ),
    },
    {
      title: 'Thriving Community',
      icon: <Icon name="Settings" />,
      body: (
        <Text>
          Connect with fellow players, collaborate on projects, and build friendships within the Aziy world.
        </Text>
      ),
    },
    {
      title: 'Real-World Impact',
      icon: <Icon name="Trophy" />,
      body: (
        <Text>
          Showcase your skills and rare NFTs on your Aziy profile, attracting potential employers and collaborators.
        </Text>
      ),
    },
  ];

  return (
    <Flex direction="column"  px={4} bg={"#000001"} minH={"100vh"} top={"20%"}>
     
        <Heading as={"h2"} fontSize="3.5em" mb={10} color={"#fff"} textAlign={"center"} mt={"10px"} borderBottom={"1px solid #ff743f"} lineHeight={"3em"}>
          Aziy Game Features
        </Heading>
     
      <Grid
        templateColumns={isLargerThanMd ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)'} // 3 columns on desktop, 2 on mobile
        gap={10}
       textAlign={"center"} >
        {featureData.map((feature) => (
          <FeatureCard  key={feature.title} title={feature.title} icon={feature.icon}>
            {feature.body}
          </FeatureCard>
        ))}
      </Grid>
    </Flex>
  );
};

export default Features;
