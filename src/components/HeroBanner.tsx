import PropTypes from "prop-types";
import styles from "./HeroBanner.module.css";

const HeroBanner = ({ className = "" }) => {
  return (
    <div className={[styles.heroBanner, className].join(" ")}>
      <div className={styles.unsplashaJk42p05xe} />
      <div className={styles.unsplashmoIfFkckParent}>
        <img
          className={styles.unsplashmoIfFkckIcon}
          loading="lazy"
          alt=""
          src="/unsplashmo-if-fkck@2x.png"
        />
        <div className={styles.clothingShoes}>{`Clothing & Shoes`}</div>
      </div>
      <div className={styles.unsplashgdruy7quengParent}>
        <img
          className={styles.unsplashgdruy7quengIcon}
          loading="lazy"
          alt=""
          src="/unsplashgdruy7queng@2x.png"
        />
        <div className={styles.homeLiving}>{`Home & Living`}</div>
      </div>
      <div className={styles.unsplashq4livi9nn6yParent}>
        <img
          className={styles.unsplashq4livi9nn6yIcon}
          loading="lazy"
          alt=""
          src="/unsplashq4livi9nn6y@2x.png"
        />
        <div className={styles.artCollectibles}>{`Art & Collectibles`}</div>
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  className: PropTypes.string,
};

export default HeroBanner;
