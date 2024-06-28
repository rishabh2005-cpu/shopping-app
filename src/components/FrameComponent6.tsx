import GroupComponent1 from "./GroupComponent1";
import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.heroBannerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.modernFarmhouseWrapper}>
            <div className={styles.modernFarmhouse}>
              <p className={styles.modern}>{`Modern `}</p>
              <p className={styles.farmhouse}>Farmhouse</p>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.eclecticDecorParent}>
                  <div className={styles.eclecticDecor}>
                    <p className={styles.eclectic}>{`Eclectic `}</p>
                    <p className={styles.decor}>Decor</p>
                  </div>
                  <div className={styles.polkaBohoDecorWrapper}>
                    <div className={styles.polkaBohoDecorContainer}>
                      <p className={styles.polkaBoho}>{`Polka Boho `}</p>
                      <p className={styles.decor1}>Decor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild1} />
            <GroupComponent1
              rectangle73="/rectangle-47@2x.png"
              distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
              emptySlideList="216,27 $"
              propFlex="unset"
              propAlignSelf="stretch"
            />
          </div>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-162@2x.png"
          />
          <div className={styles.redChairImageParent}>
            <div className={styles.redChairImage}>
              <div className={styles.redChairImageChild} />
              <div className={styles.redChairDetails}>
                <div className={styles.redChairInfo}>
                  <div className={styles.redChairFeatures}>
                    <div className={styles.redChairFeaturesChild} />
                    <img
                      className={styles.redChairFeaturesItem}
                      alt=""
                      src="/rectangle-19-12@2x.png"
                    />
                    <img
                      className={styles.redChairFeaturesInner}
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                  <div className={styles.redChairColors}>
                    <div className={styles.colors}>Colors</div>
                    <div className={styles.redChairColorPalette}>
                      <div className={styles.redChairColorSwatches} />
                      <div className={styles.redChairColorSwatches1} />
                      <div className={styles.redChairColorSwatches2} />
                      <div className={styles.redChairColorSwatches3} />
                      <div className={styles.redChairColorSwatches4} />
                      <div className={styles.redChairColorSwatches5} />
                      <div className={styles.redChairColorSwatches6} />
                    </div>
                  </div>
                  <div className={styles.rovenaRivaSeries}>
                    Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair
                  </div>
                  <div className={styles.redChairPrice}>195,13 $</div>
                </div>
              </div>
            </div>
            <FrameComponent3 />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
