import { FC } from "react";
import { AccessoriesSectionCardData } from "../../data/AccessoriesSectionCardData";
import AccessoriesSectionCard from "../utils/AccessoriesSectionCard/AccessoriesSectionCard";
import styles from "./AccessoriesSection.module.scss";

const AccessoriesSection: FC = () => {
  return (
    <div
      className={`${styles.accessoriesSection} flex justify-content-space-around flex-wrap px-page-default`}
    >
      {AccessoriesSectionCardData.map((accessories) => (
        <AccessoriesSectionCard
          key={accessories.id}
          title={accessories.title}
          img={accessories.img}
        />
      ))}
    </div>
  );
};

export default AccessoriesSection;
