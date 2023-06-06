import React from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import myphoto from "../assets/myphoto.jpg";
import MyInfo from "./MyInfo";
import NavButton from "./NavButton";
import { useNavigate } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    return <Navbar sticky="top" className="pt-0" expand={false} bg="white" >
            <Container className="border border-top-0 border-secondary" style={{borderEndStartRadius: "10px", borderEndEndRadius: "10px"}} >
                <Image src={myphoto} alt="Моё фото" className="avatar_style m-1 cursor-pointer" onClick={()=>navigate('/aboutme')}/>
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
                            <NavButton to="/" variant="light" text="Список постов" />
                            <NavButton to="/aboutme" variant="light" text="Обо мне" />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
           </Navbar>
}