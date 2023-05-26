import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import AllPosts from './Pages/AllPosts';

export default function App() {
  return <div>
          <Header />
          <Container>
            <AllPosts />
          </Container>
         </div>
}