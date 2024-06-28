import PropTypes from "prop-types";
import styles from "./RightNavigation.module.css";

const RightNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.rightNavigation, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/rectangle-39@2x.png"
          />
        </div>
        <div className={styles.rightExpandWrapper}>
          <img
            className={styles.rightExpandIcon}
            alt=""
            src="/right-expand.svg"
          />
        </div>
      </div>
      <div className={styles.lifestyleCategory}>
        <div className={styles.lifeStyle}>Life Style</div>
      </div>
    </div>
  );
};

RightNavigation.propTypes = {
  className: PropTypes.string,
};

export default RightNavigation;
