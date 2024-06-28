import GroupComponent1 from "./GroupComponent1";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.uniqueItemsHeaderParent, className].join(" ")}>
      <div className={styles.uniqueItemsHeader}>
        <div className={styles.discoverUniqueHandPicked}>
          Discover unique hand-picked items
        </div>
        <div className={styles.viewAllButton}>
          <div className={styles.viewAllLabel}>
            <div className={styles.viewAll}>View all</div>
            <div className={styles.arrowRightWrapper}>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productCardsOne}>
        <GroupComponent1
          rectangle73="/rectangle-47@2x.png"
          distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
          emptySlideList="216,27 $"
          propFlex="unset"
          propAlignSelf="unset"
        />
        <GroupComponent1
          rectangle73="/rectangle-86@2x.png"
          distressedToteLeatherBagL="Womens Cognac Leather Elastic Straps"
          emptySlideList="195,13 $"
          propFlex="unset"
          propAlignSelf="unset"
        />
        <GroupComponent1
          rectangle73="/rectangle-88@2x.png"
          distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
          emptySlideList="910,76 $"
          propFlex="unset"
          propAlignSelf="unset"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-90@2x.png"
            />
            <img className={styles.frameInner} alt="" src="/group-1-4.svg" />
          </div>
          <div className={styles.highTopCanvasShoesParent}>
            <div className={styles.highTopCanvas}>High Top Canvas Shoes</div>
            <div className={styles.priceOne}>341,02 $</div>
          </div>
        </div>
      </div>
      <div className={styles.decorCategories}>
        <div className={styles.decorCategoryLabelsWrapper}>
          <div className={styles.decorCategoryLabels}>
            <div className={styles.decorCategoryNames}>
              <div className={styles.modernFarmhouse}>
                <p className={styles.modern}>{`Modern `}</p>
                <p className={styles.farmhouse}>Farmhouse</p>
              </div>
            </div>
            <div className={styles.eclecticDecorIndicatorsParent}>
              <div className={styles.eclecticDecorIndicators}>
                <div className={styles.eclecticDecorDots} />
                <div className={styles.eclecticDecorDots1} />
                <div className={styles.eclecticDecorDots2} />
                <div className={styles.eclecticDecorDots3} />
              </div>
              <div className={styles.eclecticDecorLabel}>
                <div className={styles.eclecticDecor}>
                  <p className={styles.eclectic}>{`Eclectic `}</p>
                  <p className={styles.decor}>Decor</p>
                </div>
              </div>
            </div>
            <div className={styles.decorCategoryNames1}>
              <div className={styles.polkaBohoDecorContainer}>
                <p className={styles.polkaBoho}>{`Polka Boho `}</p>
                <p className={styles.decor1}>Decor</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.minimalistGiftsIndicatorsParent}>
          <div className={styles.minimalistGiftsIndicators}>
            <div className={styles.minimalistGiftsDots} />
            <div className={styles.minimalistGiftsDots1} />
            <div className={styles.minimalistGiftsDots2} />
          </div>
          <div className={styles.minimalistGiftsLabel}>
            <div className={styles.giftCategoryLabelsWrapper}>
              <div className={styles.giftCategoryLabels}>
                <div className={styles.minimalistStyle}>
                  <p className={styles.minimalist}>Minimalist</p>
                  <p className={styles.style}>Style</p>
                </div>
                <div className={styles.anniversaryGiftLabel}>
                  <div className={styles.anniversaryGift}>
                    <p className={styles.anniversary}>Anniversary</p>
                    <p className={styles.gift}>Gift</p>
                  </div>
                </div>
                <div className={styles.weddingGifts}>
                  <p className={styles.wedding}>Wedding</p>
                  <p className={styles.gifts}>Gifts</p>
                </div>
              </div>
            </div>
            <div className={styles.minimalistGiftsLabelChild} />
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-161@2x.png"
            />
            <div className={styles.iphoneImage}>
              <div className={styles.imagePlaceholder} />
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.iphoneDescription}>
                  <div className={styles.iphoneTitle}>
                    <img
                      className={styles.iphoneNameIcon}
                      alt=""
                      src="/rectangle-19-31@2x.png"
                    />
                    <img
                      className={styles.iphoneTitleChild}
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                  <div className={styles.colors}>Colors</div>
                </div>
                <div className={styles.iphoneButtons}>
                  <div className={styles.colorPicker}>
                    <div className={styles.pickerDotOne} />
                    <div className={styles.pickerDotTwo} />
                    <div className={styles.pickerDotThree} />
                    <div className={styles.pickerDotFour} />
                    <div className={styles.pickerDotFive} />
                    <div className={styles.pickerDotSix} />
                    <div className={styles.pickerDotSeven} />
                  </div>
                  <div className={styles.sofaDetails}>
                    <div className={styles.rovenaRivaSeries}>
                      Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair
                    </div>
                    <div className={styles.sofaPrice}>195,13 $</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iphoneImage1}>
              <div className={styles.iphoneImageChild} />
              <div className={styles.groupDiv}>
                <div className={styles.frameChild1} />
                <div className={styles.frameGroup}>
                  <FrameComponent2 rectangle19="/rectangle-19-41@2x.png" />
                  <div className={styles.dotsContainerWrapper}>
                    <div className={styles.dotsContainer}>
                      <div className={styles.dotOne} />
                      <div className={styles.dotTwo} />
                      <div className={styles.dotThree} />
                      <div className={styles.dotFour} />
                      <div className={styles.dotFive} />
                    </div>
                  </div>
                  <div
                    className={styles.iphone12128}
                  >{`Iphone 12 128 GB (Red) Apple `}</div>
                </div>
                <div className={styles.div}>789,67 $</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
