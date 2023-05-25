import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';

export default function App() {
  return <div>
          <Header />
          <Container>
            <Post />
          </Container>
         </div>
}