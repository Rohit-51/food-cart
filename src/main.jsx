import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import RecipeMenu from './pages/RecipeMenu.jsx'
import Error from './pages/Error.jsx'
import Cart from './pages/Cart.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './reduxStore/store'
import { Provider } from 'react-redux'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurant/:resId",
        element: <RecipeMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>,
)
