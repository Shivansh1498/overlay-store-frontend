import { FC } from "react";
import { dummyBanner1, dummyBanner2 } from "../../assets";
import {
  AccessoriesSection,
  DesignCategory,
  Footer,
  Navbar,
  Product,
} from "../../components";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <div className={`${styles.homeContainer}`}>
      <Navbar />
      {/* <ShopCategory /> */}
      <section className={`${styles.imageBanner} flex`}>
        <div className={`${styles.dummyBanner1}`}>
          <img src={dummyBanner1} alt="dummy banner 1" />
        </div>
        <div className={`${styles.dummyBanner2}`}>
          <div
            className={`${styles.laptopAccessories} flex flex-col justify-content-center`}
          >
            <h1>Laptop Accessories</h1>
            <p>
              The perfect fusion of protection & <br /> personalization
            </p>
            <div className={`${styles.buttonContainer} flex`}>
              <button>Laptop Skins</button>
              <button>Laptop Sleeves</button>
            </div>
          </div>
          <img src={dummyBanner2} alt="dummy banner 2" />
        </div>
      </section>
      <AccessoriesSection />
      <DesignCategory />
      <Product />
      <Footer />
    </div>
  );
};

export default HomePage;
