import {
  Flex,
  Button,
  Image,
  Link,
  Box,
  Heading
} from '@chakra-ui/react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import AziyLogo from '../assets/Aziy-logo.svg'
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (

    <Flex>
      <Flex
        direction="row"
        px={10}
        width="100vw"
        justifyContent="space-around"
        style={{backgroundColor: "#000001", color: "#fff"}}
      >
        {/* Desktop */}
        <NavLink to="/" >
        <Image src={AziyLogo} width="50%"
        />

        </NavLink>

        {/* Social Icons */}
        <Flex mt={4} justifyContent="center" alignItems="center " flex={1} direction="column">
            <Box mb={5}>
                <Heading as="h3" size="lg">Connect With Us</Heading>
            </Box>
            <Box>
            <Link href="https://twitter.com/AziyGames" isExternal target="_blank" mr={10} >
            <FontAwesomeIcon icon={faXTwitter}  aria-label="Twitter" color="#fff" fontSize="1.5em" _hover={{color:"#FF743F"}} />
            </Link>
            <Link href="https://www.instagram.com/aziy.games/" isExternal target="_blank">
            <FontAwesomeIcon icon={faInstagram}  aria-label="Instagram" color="#fff" fontSize="1.5em"/>
            </Link>
            </Box>
        </Flex>

        <Flex
          display={['none', 'none', 'flex','flex']}
          color="#fff"
          direction="column"
          textAlign="left"
          alignItems="end"
          justifyContent="center"
          flex={1}
        
        >
          <NavLink to="/" >
            <Button
              as="a"
              variant="link"
              aria-label="Home"
              color="#fff"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </NavLink>

          <NavLink to="/about"  >
            <Button
              as="a"
              variant="link"
              aria-label="About"
              color="#fff"
              my={5}
              w="100%"
            >
              About
            </Button>
          </NavLink>

          <NavLink to="/dev" >
            <Button
              as="a"
              variant="link"
              aria-label="dev"
              color="#fff"
              my={5}
              w="100%"
            >
              Development
            </Button>
          </NavLink>
        </Flex>
    
      </Flex>

    </Flex>
  )
}

export default Footer




