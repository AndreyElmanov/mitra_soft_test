import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import MyInfo from "../Blocks/MyInfo";

export default function Header() {
    return <Navbar sticky="top" className="pt-0" expand={false} bg="white">
            <Container className="border border-top-0 border-secondary" >
                <Image src={avatar} alt="Аватар" className="avatar_style m-1" />
                <MyInfo />
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
                <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-false"
                        aria-labelledby="offcanvasNavbarLabel-expand-false"
                        placement="start" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                            Mitra soft test
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink to="/">
                                <Button variant="light">Список постов</Button>
                            </NavLink>
                            <NavLink to="/aboutme">
                                <Button variant="light">Обо мне</Button>
                            </NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
           </Navbar>
}