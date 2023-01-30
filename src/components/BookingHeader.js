import "./common.css";
import {Link } from 'react-router-dom';
const BookingHeader = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-md">
    <Link to="/" className="navbar-brand">E-Cube</Link>

    <Link to="/" className="navbar-brand">Nearby Events</Link>
  </div>
</nav>
        </>
    )
}

export default BookingHeader