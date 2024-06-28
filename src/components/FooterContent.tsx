import AboutColumns from "./AboutColumns";
import LinkContainers from "./LinkContainers";
import RightNavigation from "./RightNavigation";
import FrameComponent1 from "./FrameComponent1";
import ProductSlide from "./ProductSlide";
import ProductHighlight from "./ProductHighlight";
import HighlightRightContent from "./HighlightRightContent";
import ProductInfoGrid from "./ProductInfoGrid";
import GroupComponent1 from "./GroupComponent1";
import SliderContent from "./SliderContent";
import Newsletter from "./Newsletter";
import PropTypes from "prop-types";
import styles from "./FooterContent.module.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={[styles.footerContent, className].join(" ")}>
      <div className={styles.footerContentInner}>
        <div className={styles.aboutContentParent}>
          <div className={styles.aboutContent}>
            <AboutColumns
              aCommunity="A community "
              doingGood="doing good"
              commerceIsAGlobalOnlineMa="Commerce is a global online marketplace, where people."
              unsplashbU8TeXhsPcY="/unsplashbu8texhspcy@2x.png"
            />
            <AboutColumns
              aCommunity="Support independent"
              doingGood="creators"
              commerceIsAGlobalOnlineMa="Just millions of people selling the things they love."
              unsplashbU8TeXhsPcY="/unsplashesrjtesvjhu@2x.png"
            />
            <AboutColumns
              aCommunity="Peace"
              doingGood="of mind"
              commerceIsAGlobalOnlineMa="Privacy is the highest priority of our dedicated team."
              unsplashbU8TeXhsPcY="/unsplashm-7p45jfxqo@2x.png"
            />
          </div>
          <div className={styles.footerCallToAction}>
            <div className={styles.findThingsYoull}>
              Find things you'll love. Support independent sellers.
            </div>
            <div className={styles.onlyOnPolka}>Only on polka.</div>
          </div>
        </div>
      </div>
      <div className={styles.categoryLinks}>
        <div className={styles.linkList}>
          <img
            className={styles.leftExpandIcon}
            loading="lazy"
            alt=""
            src="/left-expand.svg"
          />
        </div>
        <div className={styles.linkItems}>
          <LinkContainers
            linkBackgrounds="/rectangle-25@2x.png"
            craftKits="Craft Kits"
          />
          <LinkContainers
            linkBackgrounds="/rectangle-27@2x.png"
            craftKits="Throw Pillows"
            propGap="24px"
            propFlex="unset"
            propWidth="unset"
          />
          <LinkContainers
            linkBackgrounds="/rectangle-29@2x.png"
            craftKits="Natural Glass"
            propGap="24px"
            propFlex="unset"
            propWidth="unset"
          />
          <LinkContainers
            linkBackgrounds="/rectangle-31@2x.png"
            craftKits="Self-care"
            propGap="24px"
            propFlex="unset"
            propWidth="unset"
          />
          <LinkContainers
            linkBackgrounds="/rectangle-33@2x.png"
            craftKits="Gift Ideas"
            propGap="24px"
            propFlex="unset"
            propWidth="unset"
          />
          <LinkContainers
            linkBackgrounds="/rectangle-35@2x.png"
            craftKits="Wall Decor"
            propGap="24px"
            propFlex="unset"
            propWidth="unset"
          />
          <LinkContainers
            linkBackgrounds="/rectangle-37@2x.png"
            craftKits="Wedding"
            propGap="24px"
            propFlex="unset"
            propWidth="unset"
          />
          <RightNavigation />
        </div>
      </div>
      <FrameComponent1 />
      <div className={styles.productCarousel}>
        <img className={styles.leftExpandIcon1} alt="" src="/left-expand.svg" />
        <ProductSlide
          rectangle47="/rectangle-47@2x.png"
          distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
          emptyStateList="216,27 $"
          modern="Modern "
          farmhouse="Farmhouse"
        />
        <ProductSlide
          rectangle47="/rectangle-49@2x.png"
          distressedToteLeatherBagL="Womens Cognac Leather Elastic Straps"
          emptyStateList="195,13 $"
          modern="Eclectic "
          farmhouse="Decor"
        />
        <ProductSlide
          rectangle47="/rectangle-51@2x.png"
          distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
          emptyStateList="910,76 $"
          modern="Polka Boho "
          farmhouse="Decor"
        />
        <ProductHighlight />
        <ProductSlide
          rectangle47="/rectangle-55@2x.png"
          distressedToteLeatherBagL="Rose Gold Moissanite Vintage Wedding Ring Set"
          emptyStateList="3.344,13 $"
          modern="Anniversary"
          farmhouse="Gift"
        />
        <div className={styles.productHighlightRight}>
          <HighlightRightContent />
          <div className={styles.weddingGiftsWrapper}>
            <div className={styles.weddingGifts}>
              <p className={styles.wedding}>Wedding</p>
              <p className={styles.gifts}>Gifts</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuredProducts}>
        <div className={styles.featuredGrid}>
          <div className={styles.imageRow}>
            <div className={styles.imageTrio}>
              <div className={styles.imagePlaceholder} />
              <div className={styles.imagePlaceholder1} />
              <div className={styles.imagePlaceholder2} />
            </div>
            <div className={styles.imagePair}>
              <div className={styles.imagePlaceholder3} />
              <div className={styles.imagePlaceholder4} />
            </div>
          </div>
          <ProductInfoGrid />
          <div className={styles.productSlider}>
            <GroupComponent1
              rectangle73="/rectangle-47@2x.png"
              distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
              emptySlideList="216,27 $"
            />
            <GroupComponent1
              rectangle73="/rectangle-49@2x.png"
              distressedToteLeatherBagL="Womens Cognac Leather Elastic Straps"
              emptySlideList="195,13 $"
              propFlex="unset"
              propAlignSelf="unset"
            />
            <GroupComponent1
              rectangle73="/rectangle-51@2x.png"
              distressedToteLeatherBagL="Distressed Tote Leather Bag Leather Bag"
              emptySlideList="910,76 $"
              propFlex="unset"
              propAlignSelf="unset"
            />
            <SliderContent />
            <GroupComponent1
              rectangle73="/rectangle-55@2x.png"
              distressedToteLeatherBagL="Rose Gold Moissanite Vintage Wedding Ring Set"
              emptySlideList="3.344,13 $"
              propFlex="unset"
              propAlignSelf="unset"
            />
            <GroupComponent1
              rectangle73="/rectangle-57@2x.png"
              distressedToteLeatherBagL="Blue Topaz Bangle 24K Gold Plated Handmade"
              emptySlideList="789,09 $"
              propFlex="unset"
              propAlignSelf="unset"
            />
          </div>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
