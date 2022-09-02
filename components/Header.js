import { Navbar, Nav, NavDropdown, Form, Button, Container} from "react-bootstrap";
import Link from 'next/link';
import Search from "./UI/Search";


const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand><Link href='/'><a>Linear JS</a></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Nav.Item>
                                <Link href='/'><a className="nav-link" aria-current="page">Home</a></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href='/docs'><a className="nav-link" aria-current="page">Docs</a></Link>
                            </Nav.Item>
                            <NavDropdown title="Tutorials" id="nav-dropdown">
                                <NavDropdown.Item>
                                    <Link href='/'><a className="dropdown-item">Quick Start</a></Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href='/'><a className="dropdown-item">Setup</a></Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href='/'><a className="dropdown-item">Overview</a></Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href='/'><a className="dropdown-item">Functions</a></Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link href='/'><a className="dropdown-item">API</a></Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Link href='/blog'><a className="nav-link" aria-current="page">Blog</a></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link href='/community'><a className="nav-link" aria-current="page">Community</a></Link>
                            </Nav.Item>
                        </Nav>
                        <Search />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;