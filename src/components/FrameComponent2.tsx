import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "", rectangle19 }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src={rectangle19} />
        <img className={styles.frameItem} alt="" src="/group-1.svg" />
      </div>
      <div className={styles.colors}>Colors</div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  rectangle19: PropTypes.string,
};

export default FrameComponent2;
