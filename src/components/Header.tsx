import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headbg} />
      <FrameComponent />
      <div className={styles.hover} />
      <div className={styles.headermenu}>
        <div className={styles.category}>
          <a className={styles.jewelryAccessories}>{`Jewelry & Accessories`}</a>
          <div className={styles.clothingShoes}>{`Clothing & Shoes`}</div>
          <div className={styles.homeLiving}>{`Home & Living`}</div>
          <div className={styles.weddingParty}>{`Wedding & Party`}</div>
          <div
            className={styles.toysEntertainment}
          >{`Toys & Entertainment`}</div>
          <div className={styles.artCollectibles}>{`Art & Collectibles`}</div>
          <div className={styles.craftSupplies}>{`Craft Supplies & Tools`}</div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
