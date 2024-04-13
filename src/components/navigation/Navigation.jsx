import { NavLink } from 'react-router-dom';
import cssNav from './Navigation.module.css'

const activePage = ({ isActive }) => {
  
  return isActive ? cssNav.active : cssNav.notActive;
};

const Navigation = () => {

  return (
    <div className="header">
      <nav className="header-nav">
        <NavLink to="/" className={activePage}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activePage}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;