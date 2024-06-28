import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import styles from "./NewsletterSignup.module.css";

const NewsletterSignup = ({ className = "" }) => {
  return (
    <section className={[styles.newsletterSignup, className].join(" ")}>
      <div className={styles.featuredProducts}>
        <GroupComponent1
          rectangle73="/rectangle-47@2x.png"
          distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
          emptySlideList="216,27 $"
          propFlex="unset"
          propAlignSelf="unset"
        />
        <GroupComponent1
          rectangle73="/rectangle-86@2x.png"
          distressedToteLeatherBagL="Womens Cognac Leather Elastic Straps"
          emptySlideList="195,13 $"
          propFlex="unset"
          propAlignSelf="unset"
        />
        <GroupComponent1
          rectangle73="/rectangle-88@2x.png"
          distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
          emptySlideList="910,76 $"
          propFlex="unset"
          propAlignSelf="unset"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-90@2x.png"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-1-4.svg"
            />
          </div>
          <div className={styles.highTopCanvasShoesParent}>
            <div className={styles.highTopCanvas}>High Top Canvas Shoes</div>
            <div className={styles.priceTwo}>341,02 $</div>
          </div>
        </div>
      </div>
      <div className={styles.ratingIndicatorsWrapper}>
        <div className={styles.ratingIndicators}>
          <div className={styles.ratingDots} />
          <div className={styles.ratingDots1} />
          <div className={styles.ratingDots2} />
          <div className={styles.ratingDots3} />
        </div>
      </div>
    </section>
  );
};

NewsletterSignup.propTypes = {
  className: PropTypes.string,
};

export default NewsletterSignup;
