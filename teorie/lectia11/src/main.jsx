import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//CSS
import './index.css'
//Componente
import App from './App.jsx'
//Pagini
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from './pages/NotFound.jsx';
//Rute
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element:  <Home />},
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
