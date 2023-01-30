import "./common.css";
import {Link } from 'react-router-dom';
const Header = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-md">
    <Link to="/" className="navbar-brand">E-Cube</Link>
    <Link to="/" className="navbar-brand">Upcoming Movies</Link>
    <Link to="/latest" className="navbar-brand">Latest Movies</Link>
    <Link to="/" className="navbar-brand">All Movies</Link>
    <Link to="/" className="navbar-brand">Upcoming Movies</Link>
    <Link to="/" className="navbar-brand">Nearby Events</Link>
  </div>
</nav>
        </>
    )
}

export default Header