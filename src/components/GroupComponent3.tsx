import PropTypes from "prop-types";
import styles from "./GroupComponent3.module.css";

const GroupComponent3 = ({
  className = "",
  unsplashbU8TeXhsPcY,
  aCommunity,
  doingGood,
  commerceIsAGlobalOnlineMa,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.unsplashbu8texhspcyWrapper}>
        <img
          className={styles.unsplashbu8texhspcyIcon}
          loading="lazy"
          alt=""
          src={unsplashbU8TeXhsPcY}
        />
      </div>
      <div className={styles.productSloganParent}>
        <div className={styles.productSlogan}>
          <div className={styles.aCommunityDoingContainer}>
            <p className={styles.aCommunity}>{aCommunity}</p>
            <p className={styles.doingGood}>{doingGood}</p>
          </div>
        </div>
        <div className={styles.commerceIsA}>{commerceIsAGlobalOnlineMa}</div>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  unsplashbU8TeXhsPcY: PropTypes.string,
  aCommunity: PropTypes.string,
  doingGood: PropTypes.string,
  commerceIsAGlobalOnlineMa: PropTypes.string,
};

export default GroupComponent3;
