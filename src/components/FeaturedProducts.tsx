import ProductSlide from "./ProductSlide";
import ProductHighlight from "./ProductHighlight";
import HighlightRightContent from "./HighlightRightContent";
import PropTypes from "prop-types";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = ({ className = "" }) => {
  return (
    <div className={[styles.featuredProducts, className].join(" ")}>
      <img
        className={styles.leftExpandIcon}
        loading="lazy"
        alt=""
        src="/left-expand.svg"
      />
      <ProductSlide
        rectangle47="/rectangle-47@2x.png"
        distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
        emptyStateList="216,27 $"
        modern="Modern "
        farmhouse="Farmhouse"
      />
      <ProductSlide
        rectangle47="/rectangle-49@2x.png"
        distressedToteLeatherBagL="Womens Cognac Leather Elastic Straps"
        emptyStateList="195,13 $"
        modern="Eclectic "
        farmhouse="Decor"
      />
      <ProductSlide
        rectangle47="/rectangle-51@2x.png"
        distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
        emptyStateList="910,76 $"
        modern="Polka Boho "
        farmhouse="Decor"
      />
      <ProductHighlight />
      <ProductSlide
        rectangle47="/rectangle-55@2x.png"
        distressedToteLeatherBagL="Rose Gold Moissanite Vintage Wedding Ring Set"
        emptyStateList="3.344,13 $"
        modern="Anniversary"
        farmhouse="Gift"
      />
      <div className={styles.frameParent}>
        <HighlightRightContent />
        <div className={styles.weddings}>
          <a className={styles.weddingGifts}>
            <p className={styles.wedding}>Wedding</p>
            <p className={styles.gifts}>Gifts</p>
          </a>
        </div>
      </div>
    </div>
  );
};

FeaturedProducts.propTypes = {
  className: PropTypes.string,
};

export default FeaturedProducts;
