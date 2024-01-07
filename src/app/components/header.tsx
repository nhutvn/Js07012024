'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Blog Next js</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/admin" className="nav-link">
                            Facebook
                        </Link>
                        <Link href="/admin" className="nav-link">
                            Zalo
                        </Link>
                        <Link href="/client" className="nav-link">
                            Tiktok
                        </Link>
                        <Link href="/client" className="nav-link">
                            Twitter
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
