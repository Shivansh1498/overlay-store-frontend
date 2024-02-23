import { FC } from "react";
import { ProductCard } from "../";
import styles from "./Product.module.scss";

const Product: FC = () => {
  return (
    <>
      <div className={`${styles.productContainer} px-page-default`}>
        <h2 className={styles.productContainer_title}>Products</h2>
        <p className={styles.productContainer_subTitle}>Showing 112 results</p>
        <div
          className={`${styles.productContainer__cardContainer} flex flex-wrap`}
        >
          {Array.from({ length: 10 }).map((_, idx) => (
            <ProductCard
              key={idx}
              title={"Abstract"}
              image="https://t4.ftcdn.net/jpg/05/64/99/95/360_F_564999540_XdTvqLGDpneB3v4ifz0SZgzxMOFmfoVo.jpg"
              price={9}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
