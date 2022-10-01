import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

//import components
import { CartWidget } from "../CartWidget/CartWidget";
import { LoginIcon } from "../LoginIcon/LoginIcon";

//import images
import Logo from "../../assets/logo.png";
import Bike from "../../assets/bike.svg";

function Header() {
  return (
    <header>
      <div className="mobile">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="desktop">
        <div className="ContentNavbar">
          <div className="Bar">
            <img src={Bike} alt="Bike" />
            <p>¿Quieres ser repartidor en tiwin?</p>
            <button>Ser repartidor</button>
          </div>
          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>

            <nav>
              <h3 className="animate__animated animate__bounce animate__repeat-3">
                Tiwin
              </h3>
              <p>
                {/* <GiMagnifyingGlass className="MagnifGlass" />
                <input type="text" placeholder="Buscar en tiwin" /> */}
              </p>
            </nav>

            <div className="cart">
              <CartWidget />
              <LoginIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
