import React from "react";
import { Container } from "react-bootstrap";
import NavButton from "../Components/NavButton";

export default function NotFound() {
    return <Container className="d-flex flex-column align-items-center justify-content-center">
            <NavButton to='/' text="На главную"/>
            <h1 className="text-center">Страница не найдена</h1>
           </Container>
}