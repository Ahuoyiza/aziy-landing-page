import React from 'react';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';

const GlassCard = ({ children, title, ...props }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isLargerThanMd] = useMediaQuery('(min-width: md)'); // Optional for media query checks

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const blur = isHovered ? '8px' : '4px'; // Adjust blur intensity as needed
  const backgroundImage = `linear-gradient(
    to bottom,
    rgba(001, 001, 001, ${isHovered ? 0.2 : 0.1}) 0%,
    rgba(220, 225, 225, ${isHovered ? 0.1 : 0.08}) 100%
  )`;

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      as="article"
      borderRadius="lg"
      border={"0.07px solid #757573"}
      cursor={"pointer"}
      overflow="hidden"
      bgImage={backgroundImage} // Add background image for subtle gradient effect
      bgPos="center"
      bgSize="cover"
      color={"#fff"}
      paddingBottom={8}
      px={8}
      {...props}
      style={{
        backdropFilter: `blur(${blur}) saturate(180%)`, // Apply blur and adjust saturation
      }}
    >
      {isLargerThanMd && ( // Optional: show title only on larger screens
        <Flex justifyContent="space-between" alignItems="center" >
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
        </Flex>
      )}
      {children}
    </Box>
  );
};

export default GlassCard;
