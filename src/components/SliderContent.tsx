import PropTypes from "prop-types";
import styles from "./SliderContent.module.css";

const SliderContent = ({ className = "" }) => {
  return (
    <div className={[styles.sliderContent, className].join(" ")}>
      <div className={styles.sliderContentChild} />
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-53@2x.png" />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-1-4.svg"
        />
      </div>
      <div className={styles.sliderContentInner}>
        <div className={styles.highTopCanvasShoesParent}>
          <div className={styles.highTopCanvas}>High Top Canvas Shoes</div>
          <div className={styles.emptySlideTitle}>341,02 $</div>
        </div>
      </div>
    </div>
  );
};

SliderContent.propTypes = {
  className: PropTypes.string,
};

export default SliderContent;
