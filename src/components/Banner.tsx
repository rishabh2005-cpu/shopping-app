import GroupComponent2 from "./GroupComponent2";
import GroupComponent3 from "./GroupComponent3";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const Banner = ({ className = "" }) => {
  return (
    <section className={[styles.banner, className].join(" ")}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerGrid}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerTopLeft}>
              <div className={styles.unsplashmoIfFkckParent}>
                <img
                  className={styles.unsplashmoIfFkckIcon}
                  loading="lazy"
                  alt=""
                  src="/unsplashmo-if-fkck1@2x.png"
                />
                <div className={styles.clothingShoes}>{`Clothing & Shoes`}</div>
              </div>
              <GroupComponent2 rectangle19="/rectangle-19@2x.png" />
            </div>
            <GroupComponent3
              unsplashbU8TeXhsPcY="/unsplashbu8texhspcy@2x.png"
              aCommunity="A community "
              doingGood="doing good"
              commerceIsAGlobalOnlineMa="Commerce is a global online marketplace, where people."
            />
          </div>
          <div className={styles.bannerLeft1}>
            <div className={styles.frameParent}>
              <div className={styles.unsplashgdruy7quengParent}>
                <img
                  className={styles.unsplashgdruy7quengIcon}
                  loading="lazy"
                  alt=""
                  src="/unsplashgdruy7queng1@2x.png"
                />
                <div className={styles.homeLiving}>{`Home & Living`}</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <FrameComponent2 rectangle19="/rectangle-19-11@2x.png" />
                <div className={styles.frameGroup}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                    <div className={styles.ellipseDiv} />
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.woodLampFloorLampLambadeParent}>
                    <div className={styles.woodLampFloor}>
                      Wood lamp, Floor Lamp, Lambader, Decorative
                    </div>
                    <div className={styles.div}>458,43 $</div>
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent3
              unsplashbU8TeXhsPcY="/unsplashesrjtesvjhu@2x.png"
              aCommunity="Support independent"
              doingGood="creators"
              commerceIsAGlobalOnlineMa="Just millions of people selling the things they love."
            />
          </div>
        </div>
        <div className={styles.findThingsYoullLoveSuppoParent}>
          <div className={styles.findThingsYoull}>
            Find things you'll love. Support independent sellers.
          </div>
          <div className={styles.onlyOnPolka}>Only on polka.</div>
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.categoryGrid}>
          <div className={styles.unsplashq4livi9nn6yParent}>
            <img
              className={styles.unsplashq4livi9nn6yIcon}
              loading="lazy"
              alt=""
              src="/unsplashq4livi9nn6y1@2x.png"
            />
            <a className={styles.artCollectibles}>{`Art & Collectibles`}</a>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <FrameComponent2 rectangle19="/rectangle-19-21@2x.png" />
            <div className={styles.frameContainer}>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameChild3} />
                <div className={styles.frameChild4} />
                <div className={styles.frameChild5} />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.nockeby3SeatSofa}>
                  NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made
                </div>
                <div className={styles.productPrice}>789,67 $</div>
              </div>
            </div>
          </div>
        </div>
        <GroupComponent3
          unsplashbU8TeXhsPcY="/unsplashm-7p45jfxqo@2x.png"
          aCommunity="Peace"
          doingGood="of mind"
          commerceIsAGlobalOnlineMa="Privacy is the highest priority of our dedicated team."
        />
      </div>
    </section>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
