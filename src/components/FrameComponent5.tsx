import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.heroBannerInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.communityImage}>
          <img
            className={styles.unsplashbu8texhspcyIcon}
            loading="lazy"
            alt=""
            src="/unsplashbu8texhspcy1@2x.png"
          />
        </div>
        <div className={styles.communityHeadingParent}>
          <div className={styles.communityHeading}>
            <div className={styles.aCommunityDoingContainer}>
              <p className={styles.aCommunity}>{`A community `}</p>
              <p className={styles.doingGood}>doing good</p>
            </div>
          </div>
          <div className={styles.commerceIsA}>
            Commerce is a global online marketplace, where people.
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
