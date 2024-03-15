import Layout from "./Layout";
// import { Box } from '@chakra-ui/react';
import Hero from "./Hero.section";
import Features from "./Features.section";
import Impact from "./Impact";

const Home = () => {
  return (
    <Layout>
     <Hero/>
     <Features />
     <Impact />
    </Layout>
  )
}

export default Home
