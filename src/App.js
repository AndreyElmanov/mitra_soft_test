import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import MainPage from './Pages/MainPage';
import UserPage from './Pages/UserPage';
import AboutMe from './Pages/AboutMe';
import NotFound from './Pages/NotFound';
import Loader from './Components/Loader';
import { reduserAction } from './reducers/store';
import api from './utils/api';

export default function App(props) {
  useEffect(() => {
    reduserAction.loadStart();
    api.getPosts()
    .then(res => reduserAction.setPosts(res))
    .catch(e => console.log(e))
    .finally(() => setTimeout(reduserAction.loadStop, 500))
  }, []);

  return <>
          <Header />
          <Container>
            <Loader>
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/user/:id' element={<UserPage />} />
                <Route path='/aboutme' element={<AboutMe />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Loader>
          </Container>
         </>
}