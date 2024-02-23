import { FC } from "react";
import { CategoryCardProps } from "../../../types/CategoryCard";
import styles from "./CategoryCard.module.scss";

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  icon,
  height,
  width,
}) => {
  return (
    <div
      className={`${styles.categoryCardContainer} flex align-items-center`}
      style={{ height: height, flexBasis: width }}
    >
      <img src={icon} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default CategoryCard;
