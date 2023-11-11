import './App.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Error } from './routes/Error';

function App() {

  
  const router = createHashRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,

    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contacts',
      element: <Contact/>
    }
  ]);


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
