import { useEffect } from 'react';
import { AboutPage, BlogPage, CartPage, FAQSPage, Footer, HelpCenter,HomePage, JobsPage, LoginPage, ProductsPage, RegistrationPage, SellerRegistrationPage, SingleProductsPage, SuccessPage, TBar1, TBar2} from './AllExports.js';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss';

import {  RouterProvider, createBrowserRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
// Layout component that includes the header and footer
  const { currentBuyer } = useSelector((state) => state.user);

  const  Layout =  ({ children }) =>{
    return (
      <div style={{maxWidth:"100vw",overflowX:"hidden",justifyContent:"center"}}>
        <TBar1 />
        <TBar2 />
        {children}
        <Footer />
      </div>
    )
  }
  const router = [
      {
        path: "/",
        element: (
          <Layout>
            <HomePage />
          </Layout>
        )
      },
      {
        path: "/product/:id",
        element: (
          <Layout>
            <SingleProductsPage />
          </Layout>
        ),
      },
      {
        path: "/about",
        element: (
          <Layout>
            <AboutPage />
          </Layout>
        ),
      },
      {
        path: "/jobs",
        element: (
          <Layout>
            <JobsPage />
          </Layout>
        ),
      },
      {
        path: "/login",
        element: currentBuyer?  (
          <Layout>
            <HomePage />
          </Layout>
        ): (<LoginPage />)
      },
      {
        path: "/blog",
        element: (
          <Layout>
            <BlogPage />
          </Layout>
        ),
      },
      {
        path: "/faqs",
        element: (
          <Layout>
            <FAQSPage />
          </Layout>
        ),
      },
      {
        path:"/register",
        element:currentBuyer? (
          <Layout>
            <HomePage />
          </Layout>
        ) : (<RegistrationPage />)
      },
      {
        path: "/customercare",
        element: (
          <Layout>
            <HelpCenter />
          </Layout>
        ),
      },
      {
        path: "/registerseller",
        element: (
      
          <SellerRegistrationPage />
      
        ),
      },
      {
        path: "/products",
        element: (
          <Layout>
            <ProductsPage />
          </Layout>
        ),
      },
      {
        path: "/cart",
        element: (
          <Layout>
            <CartPage />
          </Layout>
        ),
    },
      {
        path: "*",
        element: (
          <Layout>
            <HomePage />
          </Layout>
        ),
    },
    {
      path: "/Success",
      element:<SuccessPage />
      }
  ];
 
  
  const Router = createBrowserRouter(router);
  return (
    <div className='app'>
     <RouterProvider router={Router} />

    </div>
  )
}

export default App
