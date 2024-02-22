import { FC } from "react";
import {
  DesignCategory,
  Footer,
  Navbar,
  Product,
  ShopCategory,
} from "../components";

const HomePage: FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <ShopCategory />
      <DesignCategory />
      <Product />
      <Footer />
    </div>
  );
};

export default HomePage;
