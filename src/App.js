import React from 'react';
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
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
