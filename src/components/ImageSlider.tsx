import PropTypes from "prop-types";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ className = "", unsplashmOIFFkCk, clothingShoes }) => {
  return (
    <section className={[styles.imageSlider, className].join(" ")}>
      <div className={styles.unsplashmoIfFkckParent}>
        <img
          className={styles.unsplashmoIfFkckIcon}
          loading="lazy"
          alt=""
          src={unsplashmOIFFkCk}
        />
        <div className={styles.clothingShoes}>{clothingShoes}</div>
      </div>
    </section>
  );
};

ImageSlider.propTypes = {
  className: PropTypes.string,
  unsplashmOIFFkCk: PropTypes.string,
  clothingShoes: PropTypes.string,
};

export default ImageSlider;
