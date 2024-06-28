import LinkContainers from "./LinkContainers";
import PropTypes from "prop-types";
import styles from "./Featured.module.css";

const Featured = ({ className = "" }) => {
  return (
    <section className={[styles.featured, className].join(" ")}>
      <LinkContainers
        linkBackgrounds="/rectangle-25@2x.png"
        craftKits="Craft Kits"
        propGap="24px"
        propFlex="unset"
        propWidth="unset"
      />
      <LinkContainers
        linkBackgrounds="/rectangle-27@2x.png"
        craftKits="Throw Pillows"
        propGap="24px"
        propFlex="unset"
        propWidth="unset"
      />
      <LinkContainers
        linkBackgrounds="/rectangle-29@2x.png"
        craftKits="Natural Glass"
        propGap="24px"
        propFlex="unset"
        propWidth="unset"
      />
      <LinkContainers
        linkBackgrounds="/rectangle-31@2x.png"
        craftKits="Self-care"
        propGap="24px"
        propFlex="unset"
        propWidth="unset"
      />
      <LinkContainers
        linkBackgrounds="/rectangle-33@2x.png"
        craftKits="Gift Ideas"
        propGap="24px"
        propFlex="unset"
        propWidth="unset"
      />
      <div className={styles.featuredGrid}>
        <div className={styles.featuredGridInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-35@2x.png"
            />
          </div>
        </div>
        <div className={styles.wallDecorWrapper}>
          <div className={styles.wallDecor}>Wall Decor</div>
        </div>
      </div>
      <LinkContainers
        linkBackgrounds="/rectangle-37@2x.png"
        craftKits="Wedding"
        propGap="24px"
        propFlex="unset"
        propWidth="144px"
      />
      <LinkContainers
        linkBackgrounds="/rectangle-39@2x.png"
        craftKits="Life Style"
        propGap="24px"
        propFlex="unset"
        propWidth="144px"
      />
    </section>
  );
};

Featured.propTypes = {
  className: PropTypes.string,
};

export default Featured;
