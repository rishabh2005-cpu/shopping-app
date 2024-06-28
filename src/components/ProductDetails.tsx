import GroupComponent2 from "./GroupComponent2";
import PropTypes from "prop-types";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ className = "" }) => {
  return (
    <section className={[styles.productDetails, className].join(" ")}>
      <GroupComponent2
        rectangle19="/rectangle-19@2x.png"
        propAlignSelf="unset"
        propFlex="1"
      />
    </section>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
};

export default ProductDetails;
