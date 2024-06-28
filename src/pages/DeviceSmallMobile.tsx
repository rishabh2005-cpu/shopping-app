import Header3 from "../components/Header3";
import ImageSlider from "../components/ImageSlider";
import ProductDetails from "../components/ProductDetails";
import FrameComponent5 from "../components/FrameComponent5";
import Categories from "../components/Categories";
import FeaturedProduct from "../components/FeaturedProduct";
import FrameComponent6 from "../components/FrameComponent6";
import Footer2 from "../components/Footer2";
import LowerFooter from "../components/LowerFooter";
import styles from "./DeviceSmallMobile.module.css";

const DeviceSmallMobile = () => {
  return (
    <div className={styles.deviceSmallMobile}>
      <div className={styles.deviceSmallMobileChild} />
      <Header3 />
      <main className={styles.heroBanner}>
        <ImageSlider
          unsplashmOIFFkCk="/unsplashmo-if-fkck2@2x.png"
          clothingShoes={`Clothing & Shoes`}
        />
        <ImageSlider
          unsplashmOIFFkCk="/unsplashgdruy7queng2@2x.png"
          clothingShoes={`Home & Living`}
        />
        <ImageSlider
          unsplashmOIFFkCk="/unsplashq4livi9nn6y2@2x.png"
          clothingShoes={`Art & Collectibles`}
        />
        <ProductDetails />
        <div className={styles.rating}>
          <div className={styles.stars}>
            <div className={styles.ratingStars} />
            <div className={styles.ratingStars1} />
            <div className={styles.ratingStars2} />
            <div className={styles.ratingStars3} />
          </div>
        </div>
        <FrameComponent5 />
        <div className={styles.imageSlider}>
          <div className={styles.sliderDotsParent}>
            <div className={styles.sliderDots} />
            <div className={styles.sliderDots1} />
            <div className={styles.sliderDots2} />
          </div>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.findThingsYoullLoveParent}>
            <div className={styles.findThingsYoull}>
              Find things you'll love.
            </div>
            <div className={styles.supportIndependentSellers}>
              Support independent sellers.
            </div>
            <div className={styles.onlyOnPolka}>Only on polka.</div>
          </div>
        </div>
        <Categories />
        <div className={styles.imageSlider1}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
          </div>
        </div>
        <div className={styles.heroBannerInner}>
          <div className={styles.discoverUniqueParent}>
            <div className={styles.discoverUnique}>Discover unique</div>
            <div className={styles.handPickedItems}>hand-picked items</div>
          </div>
        </div>
        <FeaturedProduct />
        <FrameComponent6 />
        <div className={styles.imageSlider2}>
          <div className={styles.ellipseGroup}>
            <div className={styles.ellipseDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
          </div>
        </div>
        <Footer2 />
        <div className={styles.heroBannerChild}>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <div className={styles.commerceIsPoweredContainer}>
              <p className={styles.commerceIsPowered}>Commerce, is powered</p>
              <p className={styles.by100Renewable}>
                by 100% renewable electricity.
              </p>
            </div>
          </div>
        </div>
        <LowerFooter />
        <div className={styles.commerceIncWrapper}>
          <div className={styles.commerceInc}>© 2022 Commerce, Inc.</div>
        </div>
      </main>
    </div>
  );
};

export default DeviceSmallMobile;
