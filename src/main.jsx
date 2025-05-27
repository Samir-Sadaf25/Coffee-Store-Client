import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import CoffeeDetails from './Component/CoffeeDetails.jsx';
import Registar from './Component/Registar.jsx';
import Login from './Component/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/coffees'),
        hydrateFallbackElement: <h2>Loading....</h2>
      },
      {
        path: "/AddCoffee",
        Component: AddCoffee
      },
      {
        path: "/UpdateCoffee/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement: <h3>Loading...</h3>
      },
      {
        path: '/coffees/:id',
        Component: CoffeeDetails,
        loader: () => fetch('http://localhost:3000/coffees'),
        hydrateFallbackElement: <h2>Loading...</h2>
      }
    ]

  },
  {
    path: '/signUp',
    Component: Registar,
  },
  {
    path: '/Login',
    Component: Login,
  },
  {
     path: '/users',
     loader:() => fetch('http://localhost:3000/users'),
     Component:Users
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
