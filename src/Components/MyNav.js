import React from "react";
import { Container, NavLink, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function MyNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Kyle McGhie Portfolio</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#samples">Samples</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
