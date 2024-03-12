import React from 'react';
import { Heading } from '@chakra-ui/react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import DevPlan from './components/DevPlan';
import About from './components/About';
import Error from './components/Error';

// root routes

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/dev',
    element: <DevPlan />
  },
  {
  path: '/*',
  element: <Error />
  },

])

const App = () => {
  return (
    <>
      <Heading  as='h1' size='4xl'>New App</Heading>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
