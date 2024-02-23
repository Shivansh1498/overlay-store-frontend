import { FC } from "react";
import { CategoryCard } from "..";
import { DesignCategoryCardData } from "../../data/DesignCategoryCardData";
import styles from "./DesignCategory.module.scss";

const DesignCategory: FC = () => {
  return (
    <div className={`${styles.designCategoryContainer} px-page-default`}>
      <h3 className={`${styles.designCategoryContainer_title}`}>
        Design Categories
      </h3>
      <div className={`${styles.designCategoryContainer__cardContainer} flex`}>
        {DesignCategoryCardData.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            width={"186px"}
            height={"60px"}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignCategory;
