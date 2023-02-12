import Home from './Routes/Home';
import Home2 from './Routes/Home2';
import Layout from './Routes/Layout';
import Login from './Components/Login';
import Register from './Components/Register';

import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Page not found, good luck next time! :(</h1>,
    children: [
      {
        element: <Home />,
        path: ''
      },
      {
        element: <Login />,
        path: '/login'
      },
      {
        element: <Register />,
        path: '/register'
      },
      {
        element: <Home2 />,
        path: '/sec'
      }
    ]
  },
]);

function App() {    // functional component (there are also class components)

  return (
    <RouterProvider router={router} />
  );
}

export default App;