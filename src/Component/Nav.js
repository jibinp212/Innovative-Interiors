import React from 'react';
import BedroomCarsoul from './BedroomDesign/BedroomCarsoul';
import KitchenDesigns from './KitchenDesoign/KitchenDesigns';
import Reactrs from './Banner/Reactrs';
import Bathroom from './Bathrooms/Bathroom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBarButton from './NavbarButton/NavBarButton';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Ceiling from './CeilingDesigns/Ceilingdesign';
import Furnitureideas from './CeilingDesigns/Furnitureideas';
import KidsRooms from './CeilingDesigns/KidsRooms';
import Walldesigns from './CeilingDesigns/Walldesigns';
import DiningRoom from './DiningRoom/DiningRoom';
import Contactblue from './Contact/Contactblue';
import Contact from './NavbarButton/Loginbtn';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Nav.css'
function NavigationBar() {
  return (
    <div>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className='bgclr'>
            <Navbar.Brand as={Link} to={"/Reactrs"} className='interior-design'> INTERIOR DESIGN </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/BedroomCarsoul"}> BEDROOM</Nav.Link>
                <Nav.Link as={Link} to={"/KitchenDesigns"}>KITCHEN</Nav.Link>
                <Nav.Link as={Link} to={"./DiningRoom"}>DINING ROOM</Nav.Link>
                <Nav.Link as={Link} to={"./Bathroom/"}>BATHROOOM </Nav.Link>
                <Nav.Link as={Link} to={"./Contactblue"}>CONTACT US</Nav.Link>
                <NavDropdown title="MORE CUSTOMISISE" id="basic-nav-Dropdown">
                  <Nav.Link as={Link} to={"./Ceiling"}>Ceiling Design</Nav.Link>
                  <Nav.Link as={Link} to={"./KidsRooms"}> KidsRooms</Nav.Link>
                  <Nav.Link as={Link} to={"./Walldesigns"}>Walldesigns</Nav.Link>
                </NavDropdown>
              </Nav>
              <NavBarButton />
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>

          <Route path="/Bathroom"
            element={<Bathroom />} />
          <Route path="/contact"
            element={<Contact />} />
          <Route path="/Reactrs"
            element={<Reactrs />} />
          <Route path="/Ceiling"
            element={<Ceiling />} />
          <Route path="Furnitureideas"
            element={<Furnitureideas />} />
          <Route path='KidsRooms'
            element={<KidsRooms />} />
          <Route path='/Walldesigns'
            element={<Walldesigns />} />
          <Route path='/BedroomCarsoul'
            element={<BedroomCarsoul />} />
          <Route path='/KitchenDesigns'
            element={<KitchenDesigns />} />
          <Route path='/DiningRoom'
            element={<DiningRoom />} />
          <Route path='/Contactblue'
            element={<Contactblue />} />
          <Route path='/NavBarButton'
            element={<NavBarButton />} />
        </Routes>
      </Router>
    </div>
  );
}
export default NavigationBar;
