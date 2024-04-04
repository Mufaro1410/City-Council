import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <input type="text" placeholder="Search here..." />
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/dashboard'}>Dashboard</Link>
        <Link to={'registration'}>Registration</Link>
        <Link to={'/login'}>Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
