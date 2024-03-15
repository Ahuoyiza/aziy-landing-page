import { 
  Flex,
  Heading,
  Text,
  Button, 
  Box

} from '@chakra-ui/react';
import BgVid from '../assets/BackgroundGaming.mp4';
import './Hero.css';
const Hero= () => {
  return (
    <Flex height={"85vh"}  color= "#fff" >
      <Flex direction="column" justifyContent={"center"} alignItems={"center"} w={"100vw"}>
        <video className="vdbg" loop autoPlay muted src={BgVid} 
  
        >
        </video>
        <Heading as="h1" size="4xl"  mb={10} textAlign={"center"}>Become A Digital Explorer</Heading>
        <Box bg="rgb(0,0,0,.7)" p={5} borderRadius={5} mb={10}>
        <Text textAlign={"center"}>
        Play, Learn, and Earn in Aziy, the World's First Playable Programming RPG
        </Text>
       
       <Text  fontWeight={600} textAlign={"center"}>
        Craft your virtual avatar, embark on quests, and conquer coding challenges in Aziy! 
        </Text>
       </Box>
        <Button
        fontWeight={"500"}
        fontSize={"1.2em"}
        py={'20px'}
        px={'2px'}
        width={"8em"}
        >
          Play Now</Button>
      </Flex>
    </Flex>
  )
}

export default Hero
