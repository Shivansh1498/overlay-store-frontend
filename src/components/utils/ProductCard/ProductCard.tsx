import { FC } from "react";
import { ProductCardProps } from "../../../types/ProductCard";
import "./ProductCard.scss";

const ProductCard: FC<ProductCardProps> = ({ title, image, price }) => {
  return (
    <div className="product-card-container flex flex-col">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="product-card-container_image"
      />
      <div className="product-card-container_image-details flex flex-col">
        <p className="title">{title}</p>
        <div className="product-card-container_image-details-quantity-price-section flex justify-content-space-between align-items-center">
          <span className="price">
            ₹ {price}
            <span className="quantity">/ 1 pc</span>
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
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
