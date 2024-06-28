import GroupComponent1 from "./GroupComponent1";
import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import styles from "./FeaturedProduct.module.css";

const FeaturedProduct = ({ className = "" }) => {
  return (
    <section className={[styles.featuredProduct, className].join(" ")}>
      <div className={styles.frameParent}>
        <GroupComponent1
          rectangle73="/rectangle-47@2x.png"
          distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
          emptySlideList="216,27 $"
          propFlex="1"
          propAlignSelf="unset"
        />
        <FrameComponent3 />
      </div>
    </section>
  );
};

FeaturedProduct.propTypes = {
  className: PropTypes.string,
};

export default FeaturedProduct;
