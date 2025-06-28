import {  RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css'
import Search1 from '../pages/search';
import Home from '../pages/home';
function App() {

const router = createHashRouter([
    {
      path: '/',
      element: <Home/>,
    },
     {
    path: '/home',  
    element: <Home />,
    },

    {
          path:'/search',
          element:<Search1/>
    },

  ],
)
          return(
    <RouterProvider router={router}/>
  )
}

export default App



