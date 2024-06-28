import PropTypes from "prop-types";
import styles from "./ProductSlide.module.css";

const ProductSlide = ({
  className = "",
  rectangle47,
  distressedToteLeatherBagL,
  emptyStateList,
  modern,
  farmhouse,
}) => {
  return (
    <div className={[styles.productSlide, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.productImages}>
          <img className={styles.productImagesChild} alt="" src={rectangle47} />
          <img
            className={styles.productImagesItem}
            alt=""
            src="/group-1-4.svg"
          />
        </div>
        <div className={styles.productTitles}>
          <div className={styles.distressedToteLeather}>
            {distressedToteLeatherBagL}
          </div>
        </div>
        <div className={styles.emptyState}>
          <div className={styles.emptyStateList}>{emptyStateList}</div>
        </div>
      </div>
      <div className={styles.productCategories}>
        <div className={styles.modernFarmhouse}>
          <p className={styles.modern}>{modern}</p>
          <p className={styles.farmhouse}>{farmhouse}</p>
        </div>
      </div>
    </div>
  );
};

ProductSlide.propTypes = {
  className: PropTypes.string,
  rectangle47: PropTypes.string,
  distressedToteLeatherBagL: PropTypes.string,
  emptyStateList: PropTypes.string,
  modern: PropTypes.string,
  farmhouse: PropTypes.string,
};

export default ProductSlide;
