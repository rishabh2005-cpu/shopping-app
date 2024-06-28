import PropTypes from "prop-types";
import styles from "./AboutColumns.module.css";

const AboutColumns = ({
  className = "",
  aCommunity,
  doingGood,
  commerceIsAGlobalOnlineMa,
  unsplashbU8TeXhsPcY,
}) => {
  return (
    <div className={[styles.aboutColumns, className].join(" ")}>
      <div className={styles.aboutColumnsChild} />
      <div className={styles.aboutParagraphs}>
        <div className={styles.aboutDetails}>
          <div className={styles.aCommunityDoingContainer}>
            <p className={styles.aCommunity}>{aCommunity}</p>
            <p className={styles.doingGood}>{doingGood}</p>
          </div>
          <div className={styles.commerceIsA}>{commerceIsAGlobalOnlineMa}</div>
        </div>
      </div>
      <img
        className={styles.unsplashbu8texhspcyIcon}
        loading="lazy"
        alt=""
        src={unsplashbU8TeXhsPcY}
      />
    </div>
  );
};

AboutColumns.propTypes = {
  className: PropTypes.string,
  aCommunity: PropTypes.string,
  doingGood: PropTypes.string,
  commerceIsAGlobalOnlineMa: PropTypes.string,
  unsplashbU8TeXhsPcY: PropTypes.string,
};

export default AboutColumns;
