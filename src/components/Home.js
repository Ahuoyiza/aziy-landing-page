import Layout from "./Layout";
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Layout>
      <h1>Home page</h1>
      <Box bg="red.200" w={[300, 400, 500]}>
        This is a box
      </Box>
    </Layout>
  )
}

export default Home
