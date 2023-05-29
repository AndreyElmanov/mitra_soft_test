import React from "react";
import { Container } from "react-bootstrap";
import NavButton from "../Components/NavButton";

export default function AboutMe() {
    return <Container className="d-flex flex-column">
            <NavButton to='/' text="Назад" />
            Будет информация
           </Container>
}