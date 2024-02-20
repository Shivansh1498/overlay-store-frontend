import { FC } from "react";
import {
  AvatarIcon,
  HeartIcon,
  MobileIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../assets/icons";
import "./Navbar.scss";

const Navbar: FC = () => {
  return (
    <nav className="navbar-container px-3 flex justify-content-space-between align-items-center">
      <h1>
        <img src={MobileIcon} alt="heart icon" /> Overlay Store
      </h1>
      <div className="search-input-container">
        <img src={SearchIcon} alt="heart icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for mobile skins"
        />
      </div>
      <div className="right-section flex align-items-center flex-gap-1">
        <img src={HeartIcon} alt="heart icon" />
        <img src={ShoppingCartIcon} alt="shopping cart icon" />
        <img src={AvatarIcon} alt="avatar icon" />
      </div>
    </nav>
  );
};

export default Navbar;
