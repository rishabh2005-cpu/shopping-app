import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./Header1.module.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headbg} />
      <FrameComponent />
      <div className={styles.hover} />
      <div className={styles.headermenu}>
        <nav className={styles.category}>
          <a className={styles.jewelryAccessories}>{`Jewelry & Accessories`}</a>
          <div className={styles.clothingShoes}>{`Clothing & Shoes`}</div>
          <div className={styles.homeLiving}>{`Home & Living`}</div>
          <div className={styles.weddingParty}>{`Wedding & Party`}</div>
          <div
            className={styles.toysEntertainment}
          >{`Toys & Entertainment`}</div>
          <div className={styles.artCollectibles}>{`Art & Collectibles`}</div>
          <div className={styles.craftSupplies}>{`Craft Supplies & Tools`}</div>
        </nav>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
