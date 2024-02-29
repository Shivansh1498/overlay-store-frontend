import { FC } from "react";
import { AccessoriesSectionCardProps } from "../../../types/AccessoriesSectionCard";
import styles from "./AccessoriesSectionCard.module.scss";

const AccessoriesSectionCard: FC<AccessoriesSectionCardProps> = ({
  title,
  img,
}) => {
  return (
    <div className={`${styles.accessoriesSectionCard}`}>
      <p className={`${styles.title}`}>{title}</p>
      <img src={img} alt={title} />
    </div>
  );
};

export default AccessoriesSectionCard;
