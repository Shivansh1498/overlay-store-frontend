import { FC } from "react";
import { CategoryCard } from "..";
import { ShopCategoryCardData } from "../../data/ShopCategoryCardData";
import styles from "./ShopCategory.module.scss";

const ShopCategory: FC = () => {
  return (
    <div className={`${styles.shopCategoryContainer} px-page-default`}>
      <h2 className={styles.shopCategoryContainer_title}>Shop by Categories</h2>
      <div className={`${styles.shopCategoryContainer__cardContainer} flex`}>
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
