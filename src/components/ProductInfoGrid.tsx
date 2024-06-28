import PropTypes from "prop-types";
import styles from "./ProductInfoGrid.module.css";

const ProductInfoGrid = ({ className = "" }) => {
  return (
    <div className={[styles.productInfoGrid, className].join(" ")}>
      <img
        className={styles.productInfoGridChild}
        loading="lazy"
        alt=""
        src="/group-16@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/group-1.svg" />
        <div className={styles.productDetails}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.swatchContainerParent}>
                <img
                  className={styles.swatchContainerIcon}
                  alt=""
                  src="/rectangle-19-4@2x.png"
                />
                <div className={styles.colors}>Colors</div>
              </div>
              <div className={styles.emptySwatchParent}>
                <div className={styles.emptySwatch} />
                <div className={styles.emptySwatch1} />
                <div className={styles.emptySwatch2} />
                <div className={styles.emptySwatch3} />
                <div className={styles.emptySwatch4} />
                <div className={styles.emptySwatch5} />
                <div className={styles.emptySwatch6} />
              </div>
            </div>
            <div className={styles.rovenaRivaSeries}>
              Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair
            </div>
          </div>
          <div className={styles.productNameList}>195,13 $</div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <img className={styles.groupIcon} alt="" src="/group-1.svg" />
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-19-5@2x.png"
              />
              <div className={styles.colors1}>Colors</div>
            </div>
            <div className={styles.emptySwatchGroup}>
              <div className={styles.emptySwatch7} />
              <div className={styles.emptySwatch8} />
              <div className={styles.emptySwatch9} />
              <div className={styles.emptySwatch10} />
              <div className={styles.emptySwatch11} />
            </div>
          </div>
          <div
            className={styles.iphone12128}
          >{`Iphone 12 128 GB (Red) Apple `}</div>
        </div>
        <div className={styles.div}>458,43 $</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <img className={styles.frameChild1} alt="" src="/group-1.svg" />
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.rectangleParent1}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/rectangle-19-6@2x.png"
                />
                <div className={styles.colors2}>Colors</div>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <div className={styles.frameChild3} />
                <div className={styles.frameChild4} />
              </div>
            </div>
            <div className={styles.rovenaRivaSeries1}>
              Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair
            </div>
          </div>
          <div className={styles.div1}>789,67 $</div>
        </div>
      </div>
    </div>
  );
};

ProductInfoGrid.propTypes = {
  className: PropTypes.string,
};

export default ProductInfoGrid;
