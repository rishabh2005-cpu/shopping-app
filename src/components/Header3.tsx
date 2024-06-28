import PropTypes from "prop-types";
import styles from "./Header3.module.css";

const Header3 = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.headbg} />
      <header className={styles.logoParent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.userActionsWrapper}>
          <div className={styles.userActions}>
            <div className={styles.userProfile}>
              <img
                className={styles.userIcon}
                loading="lazy"
                alt=""
                src="/user.svg"
              />
            </div>
            <div className={styles.notification}>
              <div className={styles.notificationDot} />
              <div className={styles.notificationCount}>
                <img
                  className={styles.bagAltIcon}
                  loading="lazy"
                  alt=""
                  src="/bag-alt.svg"
                />
                <a className={styles.a}>16</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.navigation}>
        <div className={styles.sortDropdown}>
          <div className={styles.sortDropdownChild} />
          <img
            className={styles.sortIcon}
            loading="lazy"
            alt=""
            src="/sort.svg"
          />
        </div>
        <div className={styles.containersearch}>
          <div className={styles.searchPlaceholder}>
            <div className={styles.searchAnything}>Search anything</div>
          </div>
          <img
            className={styles.searchAltDuotoneLineIcon}
            alt=""
            src="/search-alt-duotone-line.svg"
          />
        </div>
      </div>
    </div>
  );
};

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
