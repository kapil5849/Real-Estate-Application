import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Layout from './components/Layout';
import PrivateRouteComponent from './components/PrivateRouteComponent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route element={<PrivateRouteComponent />} >
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/create-listing" element={<Layout><CreateListing /></Layout>} />
          <Route path='/update-listing/:listingId' element={<Layout><UpdateListing /></Layout>} />
        </Route>
        <Route path="/sign-in" element={<Layout><SignIn /></Layout>} />
        <Route path="/sign-up" element={<Layout><SignUp /></Layout>} />
        <Route path="/listing/:listingId" element={<Layout><Listing /></Layout>} />
        <Route path="/search" element={<Layout><Search /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
