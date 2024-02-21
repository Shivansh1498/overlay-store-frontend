import { FC } from "react";
import { CategoryCardProps } from "../../../types/CategoryCard";
import "./CategoryCard.scss";

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  icon,
  height,
  width,
}) => {
  return (
    <div
      className="category-card-container flex align-items-center"
      style={{ height: height, flexBasis: width }}
    >
      <img src={icon} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default CategoryCard;
