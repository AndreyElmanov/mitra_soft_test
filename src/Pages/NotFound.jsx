import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return <Container className="d-flex flex-column justify-content-center align-items-center">
            <NavLink to='/'>
                <Button variant="primary">На главную</Button>
            </NavLink>
            Страница не найдена
           </Container>
}