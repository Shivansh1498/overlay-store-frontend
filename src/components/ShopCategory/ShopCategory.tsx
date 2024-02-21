import { FC } from "react";
import { CategoryCard } from "..";
import { ShopCategoryCardData } from "../../data/ShopCategoryCardData";
import "./ShopCategory.scss";

const ShopCategory: FC = () => {
  return (
    <div className="shop-category-container px-page-default">
      <h2 className="shop-category-container_title">Shop by Categories</h2>
      <div className="shop-category-container__card-container flex">
        {ShopCategoryCardData.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            width={"290px"}
            height={"68px"}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
