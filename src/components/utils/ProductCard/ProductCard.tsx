import { FC } from "react";
import { ProductCardProps } from "../../../types/ProductCard";
import styles from "./ProductCard.module.scss";

const ProductCard: FC<ProductCardProps> = ({ title, image, price }) => {
  return (
    <div className={`${styles.productCardContainer} flex flex-col`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={styles.productCardContainer_image}
      />
      <div
        className={`${styles.productCardContainer_imageDetails} flex flex-col`}
      >
        <p className={styles.title}>{title}</p>
        <div
          className={`${styles.productCardContainer_imageDetailsQuantityPriceSection} flex justify-content-space-between align-items-center`}
        >
          <span className={styles.price}>
            ₹ {price}
            <span className={styles.quantity}>/ 1 pc</span>
          </span>
          <span>
            <input
              type="number"
              pattern="[1-9]{2}"
              min="1"
              max="23"
              defaultValue={1}
            />
          </span>
        </div>
        <button className={styles.addToCartBtn}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
