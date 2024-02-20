import { FC } from "react";
import { Categories, Footer, Navbar, Products } from "../components";

const HomePage: FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
