import PropTypes from "prop-types";
import styles from "./Header2.module.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headbg} />
      <div className={styles.nav}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.userNav}>
          <div className={styles.userActions}>
            <div className={styles.helpDropdown}>
              <div className={styles.helpLink}>
                <div className={styles.help}>
                  <a className={styles.help1}>Help</a>
                </div>
              </div>
              <div className={styles.userDropdown}>
                <img className={styles.userIcon} alt="" src="/user.svg" />
              </div>
              <div className={styles.accountLabel}>
                <a className={styles.account}>Account</a>
              </div>
            </div>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <div className={styles.searchIcon} />
              <a className={styles.searchPlaceholder}>16</a>
            </div>
            <div className={styles.cart}>
              <img className={styles.bagAltIcon} alt="" src="/bag-alt.svg" />
              <div className={styles.cartLabel}>
                <a className={styles.shoping}>Shoping</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.sortFilter}>
          <div className={styles.sortFilterChild} />
          <img className={styles.sortIcon} alt="" src="/sort.svg" />
        </div>
        <div className={styles.containersearch}>
          <div className={styles.allCategories}>
            <a className={styles.allCategories1}>All categories</a>
            <img
              className={styles.expandDownLightIcon}
              alt=""
              src="/expand-down-light.svg"
            />
          </div>
          <div className={styles.searchAnythingWrapper}>
            <div className={styles.searchAnything}>Search anything</div>
          </div>
          <div className={styles.searchAltDuotoneLineWrapper}>
            <img
              className={styles.searchAltDuotoneLineIcon}
              alt=""
              src="/search-alt-duotone-line.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
