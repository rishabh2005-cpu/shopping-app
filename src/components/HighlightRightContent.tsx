import PropTypes from "prop-types";
import styles from "./HighlightRightContent.module.css";

const HighlightRightContent = ({ className = "" }) => {
  return (
    <div className={[styles.highlightRightContent, className].join(" ")}>
      <div className={styles.imageRightWrapper}>
        <div className={styles.imageRightWrapperChild} />
        <div className={styles.highlightRightImage}>
          <img
            className={styles.highlightRightImageChild}
            alt=""
            src="/rectangle-57@2x.png"
          />
          <img
            className={styles.highlightRightImageItem}
            alt=""
            src="/group-1-4.svg"
          />
        </div>
        <div className={styles.highlightRightTitle}>
          <div className={styles.blueTopazBangle}>
            Blue Topaz Bangle 24K Gold Plated Handmade
          </div>
        </div>
        <div className={styles.emptyProductRight}>
          <div className={styles.emptyStateRight}>789,09 $</div>
        </div>
      </div>
      <div className={styles.carouselRight}>
        <img
          className={styles.rightExpandIcon}
          alt=""
          src="/right-expand.svg"
        />
      </div>
    </div>
  );
};

HighlightRightContent.propTypes = {
  className: PropTypes.string,
};

export default HighlightRightContent;
