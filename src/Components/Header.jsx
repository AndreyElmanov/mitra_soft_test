import React from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import myphoto from "../assets/myphoto.jpg";
import MyInfo from "./MyInfo";
import NavButton from "./NavButton";

export default function Header() {
    return <Navbar sticky="top" className="pt-0" expand={false} bg="white" >
            <Container className="border border-top-0 border-secondary" style={{borderEndStartRadius: "10px", borderEndEndRadius: "10px"}} >
                <Image src={myphoto} alt="Моё фото" className="avatar_style m-1" />
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
                            <NavButton to="/" className="m-1" variant="light" text="Список постов" />
                            <NavButton to="/aboutme" className="m-1" variant="light" text="Обо мне" />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
           </Navbar>
}