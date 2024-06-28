import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.logoParent, className].join(" ")}>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.containersearch}>
        <div className={styles.allCategories}>
          <a className={styles.allCategories1}>All categories</a>
          <img
            className={styles.expandDownLightIcon}
            alt=""
            src="/expand-down-light.svg"
          />
        </div>
        <div className={styles.searchInput}>
          <div className={styles.searchAnything}>Search anything</div>
        </div>
        <div className={styles.searchIcon}>
          <img
            className={styles.searchAltDuotoneLineIcon}
            alt=""
            src="/search-alt-duotone-line.svg"
          />
        </div>
      </div>
      <div className={styles.userActions}>
        <div className={styles.helpDropdown}>
          <div className={styles.help}>
            <a className={styles.help1}>Help</a>
          </div>
        </div>
        <div className={styles.accountDropdown}>
          <div className={styles.accountIcon}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <a className={styles.accountInitial}>16</a>
            </div>
          </div>
          <div className={styles.shopaccount}>
            <div className={styles.account}>
              <img className={styles.userIcon} alt="" src="/user.svg" />
              <a className={styles.account1}>Account</a>
            </div>
            <div className={styles.shopping}>
              <img className={styles.bagAltIcon} alt="" src="/bag-alt.svg" />
              <a className={styles.shoping}>Shoping</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
