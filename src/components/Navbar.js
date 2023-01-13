import { Link } from "react-router-dom";
import HoppyPolla from "../images/HoppyPolla.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <img className="nav-img" src={HoppyPolla} alt="hoppypolla" />
      <div className="nav-container">
        <h1>HoppyPolla</h1>
        <Link to="/">Home</Link>
        <Link to="/brew">Brew</Link>
        <Link to="/brewing-101">Brewing 101</Link>
        <Link to="/create-brew">Create Brew</Link>
        <Link to="/contact">Contact</Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log Out</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
