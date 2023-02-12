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
import { ProtectedRoute } from './Components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Page not found, good luck next time! :(</h1>,
    children: [
      {
        element: <Login />,
        path: '/'
      },
      {
        element: <Register />,
        path: '/register'
      },
      {
        element:
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>,
        path: '/home'
      },
      {
        element:
          <ProtectedRoute>
            <Home2 />
          </ProtectedRoute>,
        path: '/search'
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