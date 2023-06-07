import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import MainPage from './Pages/MainPage';
import UserPage from './Pages/UserPage';
import AboutMe from './Pages/AboutMe';
import NotFound from './Pages/NotFound';
import Loader from './Components/Loader';

export default function App() {

  return <>
          <Header />
          <Container>
            <Loader>
              <Routes>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/user/:id' exact element={<UserPage />} />
                <Route path='/aboutme' exact element={<AboutMe />} />
                <Route path='*' exact element={<NotFound />} />
              </Routes>
            </Loader>
          </Container>
         </>
}