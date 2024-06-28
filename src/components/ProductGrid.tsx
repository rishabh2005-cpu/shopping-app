import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ className = "" }) => {
  return (
    <div className={[styles.productGrid, className].join(" ")}>
      <div className={styles.productCards}>
        <div className={styles.productcard01}>
          <div className={styles.cardBackground} />
          <div className={styles.cardContent}>
            <img
              className={styles.cardContentChild}
              alt=""
              src="/group-1.svg"
            />
            <div className={styles.colorPicker}>
              <img
                className={styles.colorSwatchIcon}
                loading="lazy"
                alt=""
                src="/rectangle-19@2x.png"
              />
              <div className={styles.colors}>
                <div className={styles.colors1}>Colors</div>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.ellipseDiv} />
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                  <div className={styles.frameChild3} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.vonnaNevaWalnut}>
              Vonna Neva Walnut Sandalye Chair
            </div>
            <div className={styles.div}>195,13 $</div>
          </div>
        </div>
        <GroupComponent
          rectangle19="/rectangle-19-1@2x.png"
          woodLampFloorLampLambader="Wood lamp, Floor Lamp, Lambader, Decorative"
          emptyDescription="458,43 $"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <img className={styles.groupIcon} alt="" src="/group-1.svg" />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleGroup}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-19-2@2x.png"
                  />
                  <div className={styles.colors2}>Colors</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameChild4} />
                  <div className={styles.frameChild5} />
                  <div className={styles.frameChild6} />
                </div>
              </div>
              <div className={styles.nockeby3SeatSofa}>
                NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple
              </div>
            </div>
            <div className={styles.div1}>789,67 $</div>
          </div>
        </div>
        <GroupComponent
          rectangle19="/rectangle-19-3@2x.png"
          woodLampFloorLampLambader="Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches"
          emptyDescription="43,23 $"
          propBackgroundColor="#fdf0ab"
        />
      </div>
    </div>
  );
};

ProductGrid.propTypes = {
  className: PropTypes.string,
};

export default ProductGrid;
