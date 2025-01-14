import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./Routes/Homepage";
import About from "./Routes/About";
import Contactform from "./Routes/Contact";
import Loginform from "./Routes/Login";
import Register from "./Routes/Register";
import Dashboard from "./Routes/Dashboard";
import Events from "./Routes/Events";
import PageNotFound from "./Routes/PageNotFound";
import TermsAndCondition from "./Routes/TermsAndCondition";
import EventPage from "./Routes/EventPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MyEvent from "./components/MyCreatedEvent";
import MyJoinedEvent from "./components/MyJoinedEvents";
import Profile from "./Routes/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Homepage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contactform />
        <Footer />
      </>
    ),
  },
  {
    path:"/events",
    element: (
      <>
      <Navbar />
      <Events/>
      <Footer/>
      </>
    )
  },
  {
    path:"/events/:slug",
    element: (
      <>
      <Navbar />
      <EventPage/>
      <Footer/>
      </>
    )
  },
  {
    path:"/login",
    element:(
      <>
        <Navbar/>
        <Loginform/>
        <Footer/>
      </>
    )
  },{
    path:"/register",
    element: (
      <>
        <Navbar/>
        <Register/>
        <Footer/>
      </>
    )
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Navbar />
        <Dashboard />
        <Footer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Navbar />
        <Profile/>
        <Footer/>
      </ProtectedRoute>
    )
  },
  {
    path:"/myevents",
    element: (
      <ProtectedRoute>
        <Navbar />
        <MyEvent/>
        <Footer/>
      </ProtectedRoute>
    )
  },
  {
    path:"/joined",
    element: (
      <ProtectedRoute>
        <Navbar />
        <MyJoinedEvent/>
        <Footer/>
      </ProtectedRoute>
    )
  },
  {
    path:"/tos",
    element:(
      <>
      <Navbar/>
      <TermsAndCondition/>
      <Footer/>
      </>
    )
  },
  {
    path:"*",
    element: (
      <>
      <Navbar/>
      <PageNotFound/>
      <Footer/>
      </>
    )
  }
]);

const App = () => {
  return <>
  <RouterProvider router={router} />
  </>;
};

export default App;
