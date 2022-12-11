import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';




function PaginaInicial() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">MENU</Navbar.Brand>

            <center><Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/apresentacao">Apresentação</Nav.Link>
              <Nav.Link href="/orcamento">Orçamentos</Nav.Link>
              <Nav.Link href="/nossosProjetos">Nossos Projetos</Nav.Link>
              <Nav.Link href="/depoimentos">Depoimentos</Nav.Link>
              <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link>
            </Nav></center>
          </Container>
        </Navbar>
        <br />    
      </>
    );
  }
  
  export default PaginaInicial;