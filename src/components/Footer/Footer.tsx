import { FC } from "react";
import {
  facebookIcon,
  instagramIcon,
  localPhoneIcon,
  localPostOfficeIcon,
  shoppingBasketIcon,
  twitterIcon,
} from "../../assets/icons";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div
      className={`${styles.footerContainer} flex justify-content-space-between align-items-center flex-wrap px-page-default`}
    >
      <div className={`${styles.leftSection} flex flex-col`}>
        <div className={styles.leftSectionUpper}>
          <p className={`flex align-items-center`}>
            <img src={shoppingBasketIcon} alt="shopping bag icon" />
            ontheshelf.
          </p>
          <p className={styles.subtitle}>
            Get your mobile and laptop skins delivered to your doorstep!
          </p>
        </div>
        <div className={`${styles.leftSectionLower} flex`}>
          <img src={instagramIcon} alt="instagram icon" />
          <img src={facebookIcon} alt="facebook icon" />
          <img src={twitterIcon} alt="twitter icon" />
        </div>
      </div>
      <div className={`${styles.rightSection} flex flex-col`}>
        <div className={styles.rightSectionUpper}>
          <p>Need assistance?</p>
          <p>Our support team is available 24/7</p>
        </div>
        <div className={styles.rightSectionLower}>
          <p className={`flex align-items-center`}>
            <img src={localPhoneIcon} alt="phone icon" />( + 123 ) 000 111 222
            333
          </p>
          <p className={`flex align-items-center`}>
            <img src={localPostOfficeIcon} alt="mail icon" />
            ontheshelf@uizard.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
