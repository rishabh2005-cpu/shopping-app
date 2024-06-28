import LinkContainers from "./LinkContainers";
import PropTypes from "prop-types";
import styles from "./Categories.module.css";

const Categories = ({ className = "" }) => {
  return (
    <section className={[styles.categories, className].join(" ")}>
      <div className={styles.categoryGrid}>
        <LinkContainers
          linkBackgrounds="/rectangle-251@2x.png"
          craftKits="Craft Kits"
          propGap="16px"
          propFlex="1"
          propWidth="unset"
        />
        <LinkContainers
          linkBackgrounds="/rectangle-271@2x.png"
          craftKits="Throw Pillows"
          propGap="16px"
          propFlex="1"
          propWidth="unset"
        />
      </div>
    </section>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
