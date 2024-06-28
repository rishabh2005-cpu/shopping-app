import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/rectangle-86@2x.png" />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-1-4.svg"
          />
        </div>
      </div>
      <div className={styles.womensCognacLeather}>
        Womens Cognac Leather Elastic Straps
      </div>
      <div className={styles.div}>195,13 $</div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
