import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Proyectos from "../pages/Proyectos";
import { Navbar, Container, Nav } from "react-bootstrap";
import img from "../logo.svg";
import Habilidades from "../pages/Habilidades";

const MiPagina = () => {
  return (
    <HashRouter>
      <div className="navegador">
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              {
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={img}
                  alt="react"
                />
              }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/proyectos">
                  Proyectos
                </Nav.Link>
                <Nav.Link as={Link} to="/habilidades">
                  Habilidades
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div id="fondo">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/habilidades" component={Habilidades} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default MiPagina;
