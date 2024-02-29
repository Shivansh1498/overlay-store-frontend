import { FC } from "react";
import {
  AvatarIcon,
  HeartIcon,
  MobileIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../assets";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav
      className={`${styles.navbarContainer} px-page-default flex justify-content-space-between align-items-center`}
    >
      <h1>
        <img src={MobileIcon} alt="heart icon" />
        <span className={styles.navbarContainer_title}>Skinfinity Store</span>
      </h1>
      <div className={styles.searchInputContainer}>
        <img src={SearchIcon} alt="heart icon" />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for mobile skins"
        />
      </div>
      <div className={`${styles.rightSection} flex align-items-center`}>
        <img src={HeartIcon} alt="heart icon" />
        <img src={ShoppingCartIcon} alt="shopping cart icon" />
        <img src={AvatarIcon} alt="avatar icon" />
      </div>
    </nav>
  );
};

export default Navbar;
