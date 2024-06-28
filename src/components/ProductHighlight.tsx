import PropTypes from "prop-types";
import styles from "./ProductHighlight.module.css";

const ProductHighlight = ({ className = "" }) => {
  return (
    <div className={[styles.productHighlight, className].join(" ")}>
      <div className={styles.highlightContent}>
        <div className={styles.highlightContentChild} />
        <div className={styles.imageWrapper}>
          <img
            className={styles.imageWrapperChild}
            alt=""
            src="/rectangle-53@2x.png"
          />
          <img
            className={styles.imageWrapperItem}
            alt=""
            src="/group-1-4.svg"
          />
        </div>
        <div className={styles.highlightDetails}>
          <div className={styles.highlightTitle}>
            <div className={styles.highTopCanvas}>High Top Canvas Shoes</div>
            <div className={styles.emptyProduct}>341,02 $</div>
          </div>
        </div>
      </div>
      <div className={styles.highlightCategory}>
        <div className={styles.categoryName}>
          <div className={styles.minimalistStyle}>
            <p className={styles.minimalist}>Minimalist</p>
            <p className={styles.style}>Style</p>
          </div>
        </div>
        <div className={styles.categoryBackground} />
      </div>
    </div>
  );
};

ProductHighlight.propTypes = {
  className: PropTypes.string,
};

export default ProductHighlight;
