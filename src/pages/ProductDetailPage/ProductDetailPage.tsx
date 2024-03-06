import { FC } from "react";
import { Footer, Navbar } from "../../components";
import styles from "./ProductDetailPage.module.scss";

const ProductDetailPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.productDetailContainer}>
        <div
          className={`${styles.productDetailBanner} flex justify-content-center`}
        >
          <img
            src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dummy product detail image"
          />
          <div className={`${styles.productDetail} flex flex-col`}>
            <h2 className={styles.productTitle}>Product Name</h2>
            <p className={styles.productRating}>(4.8/5, 12 Reviews)</p>
            <p className={styles.productPrice}>₹ 15.49</p>
            <p className={styles.productDesc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              neque error. Deserunt est eius saepe ipsum quisquam inventore,
              voluptatibus itaque.
            </p>
            <button className={styles.productAddToCartBtn}>Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
