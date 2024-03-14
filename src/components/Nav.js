import { useState } from 'react'
import {
  Flex,
  Button,
  IconButton,
  Image,
} from '@chakra-ui/react';
import AziyLogo from '../assets/Aziy-logo.svg'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";


const Nav = () => {
const [display, changeDisplay] = useState('none')
  return (

    <Flex>
      <Flex
        // position="fixed"
        direction="row"
        px={10}
        width="100vw"
        justifyContent="space-between"
        style={{backgroundColor: "#000001", color: "#fff"}}
      >
        {/* Desktop */}
        <NavLink to="/" >
        <Image src={AziyLogo} width="20%"
        />

        </NavLink>
        <Flex
          display={['none', 'none', 'flex','flex']}
          color="#fff"
          justifyContent="center"
          alignItems="center"
        
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

          <NavLink to="/about"  style={{ margin:"0px 1em"}}>
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

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
    
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <NavLink to="/" >
            <Button
              as="a"
              variant="link"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </NavLink>

          <NavLink to="/about" >
            <Button
              as="a"
              variant="link"
              aria-label="About"
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
              aria-label="Dev"
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

export default Nav




