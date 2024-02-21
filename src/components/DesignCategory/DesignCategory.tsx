import { FC } from "react";
import { CategoryCard } from "..";
import { DesignCategoryCardData } from "../../data/DesignCategoryCardData";
import "./DesignCategory.scss";

const DesignCategory: FC = () => {
  return (
    <div className="design-category-container px-page-default">
      <h3 className="design-category-container_title">Design Categories</h3>
      <div className="design-category-container__card-container flex">
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
