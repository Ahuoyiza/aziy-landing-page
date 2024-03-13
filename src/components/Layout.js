import Nav from './Nav';
import Footer from './Footer';
import { Flex } from '@chakra-ui/react';



const Layout = ({children}) => {
  return (
    <Flex minH="100vh" flexDirection="column">
      <Nav />
      <main  style={{flex:"1"}}>
      {children}
      </main>
 
      <Footer style={{ justifyContent: 'flex-end' }}/>
    </Flex>
  )
}

export default Layout
