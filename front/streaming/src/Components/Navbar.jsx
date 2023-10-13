import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiSearch, BiHomeSmile, BiSolidMoviePlay} from 'react-icons/bi'
import { MdMovieFilter } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi' 
import { IoMdNotificationsOutline } from 'react-icons/io'
import './css/navbar.css'
import src from '../assets/man.svg'
//import Bootstrap from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navBar">
      <Container fluid>
        <Navbar.Brand className='brand' href="#">MoviesRoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='items' href="#action1">
                <div className='item'>
                    <BiHomeSmile />
                </div>
                <div className='item'>
                    <p>Home</p>
                </div>
            </Nav.Link>
            <Nav.Link className='items' href="#action1">
                <div className='item'>
                    <BiSolidMoviePlay />
                </div>
                <div className='item'>
                    <p>Filmes</p>
                </div>
            </Nav.Link>
            <Nav.Link className='items' href="#action1">
                <div className='item'>
                    <MdMovieFilter />
                </div>
                <div className='item'>
                    <p>Novos</p>
                </div>
            </Nav.Link>
          </Nav>
          <nav className='navbarRight'>
          <Button variant="navbarBtn"><FiSearch /></Button>
            <NavDropdown title={<IoMdNotificationsOutline />} className='btn-navbarBtn' id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
            </NavDropdown>
          </nav>
          <nav>
          <NavDropdown title={<img className="thumbnail-image" 
                            src={src} 
                            alt="user pic"
                        />} className='btn-navbarBtn profile' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Meu perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lista de desejos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;