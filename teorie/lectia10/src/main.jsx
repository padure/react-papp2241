import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
//Pages
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home/> },
      { path: "about", element: <About/> },
      { path: "contact", element: <Contact/> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
