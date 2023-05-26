import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AboutMe() {
    return <Container className="d-flex flex-column">
            <NavLink to='/'>
                <Button variant="primary">
                    Назад
                </Button>
            </NavLink>
            Будет информация
           </Container>
}