import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { MdMovieEdit } from 'react-icons/md'
import { useGlobalState } from '../provider/GlobalProvider/useGlobalstate';
import style from "./Header.module.css"
function Header() {
  const navigate = useNavigate()
  const { state: { favorite } } = useGlobalState()

  return (

    <Navbar expand="lg" className="bg-danger p-4 " >
      <Container  >
        <Navbar.Brand onClick={() => navigate("./movies")} >Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className={`${style.active} nav-link`} to={"./movies"} >Home</Link>
            <Link className={`${style.active} nav-link`} to={"./search"} >Search</Link>
            <Link className={`${style.active} nav-link`} to={"./movies/:movie_id"} >Details</Link>
            <Link className={`${style.active} nav-link position-relative`} to={"./favorite"} >Favorite
              <span className={`${style.badge} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark`}>{favorite.length ?favorite.length :"" }</span> </Link>
          </Nav>
          <MdMovieEdit className={`${style.icon} ms-3`} size={"2rem"}  onClick={() => navigate("./movie-create")} />

        </Navbar.Collapse>

      </Container>

    </Navbar >
  );
}

export default Header;