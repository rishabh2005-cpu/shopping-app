import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.footerContentInner, className].join(" ")}>
      <div className={styles.discoverUniqueHandPickedItParent}>
        <div className={styles.discoverUniqueHandPicked}>
          Discover unique hand-picked items
        </div>
        <div className={styles.viewAllLink}>
          <div className={styles.viewAllLink1}>
            <a className={styles.viewAll}>View all</a>
            <div className={styles.arrowRightWrapper}>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
