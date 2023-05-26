import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import AllPosts from './Pages/AllPosts';
import UserPage from './Pages/UserPage';
import AboutMe from './Pages/AboutMe';
import NotFound from './Pages/NotFound';
import Loader from './Components/Loader';


export default function App() {
  let location = useLocation();
  return <>
          <Header />
          <Container>
            <Loader location={location}>
              <Routes>
                <Route path='/' element={<AllPosts />} />
                <Route path='/user/:id' element={<UserPage location={location}/>} />
                <Route path='/aboutme' element={<AboutMe />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Loader>
          </Container>
         </>
}