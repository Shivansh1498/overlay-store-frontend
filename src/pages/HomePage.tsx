import { FC } from "react";
import {
  DesignCategory,
  Footer,
  Navbar,
  Products,
  ShopCategory,
} from "../components";

const HomePage: FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <ShopCategory />
      <DesignCategory />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
