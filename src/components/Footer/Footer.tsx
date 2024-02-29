import { FC } from "react";
import {
  instagramIcon,
  localPhoneIcon,
  localPostOfficeIcon,
  shoppingBasketIcon,
  whatsappIcon,
} from "../../assets";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div
      className={`${styles.footerContainer} flex justify-content-space-between align-items-center flex-wrap`}
    >
      <div className={`${styles.leftSection} flex flex-col`}>
        <div className={styles.leftSectionUpper}>
          <p className={`flex align-items-center`}>
            <img src={shoppingBasketIcon} alt="shopping bag icon" />
            Skinfinity
          </p>
          <p className={styles.subtitle}>
            Get your mobile and laptop skins delivered to your doorstep!
          </p>
        </div>
        <div className={`${styles.leftSectionLower} flex`}>
          <img src={instagramIcon} alt="instagram icon" />
          <img src={whatsappIcon} alt="whatsapp icon" />
        </div>
      </div>
      <div className={`${styles.rightSection} flex flex-col`}>
        <div className={styles.rightSectionUpper}>
          <p>Need assistance?</p>
          <p>Our support team is available 24/7</p>
        </div>
        <div className={styles.rightSectionLower}>
          <p className={`flex align-items-center`}>
            <img src={localPhoneIcon} alt="phone icon" />
            +919082273107
          </p>
          <p className={`flex align-items-center ${styles.mail}`}>
            <img src={localPostOfficeIcon} alt="mail icon" />
            <span>anuradha.singh2580@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
