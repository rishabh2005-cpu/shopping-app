import PropTypes from "prop-types";
import styles from "./LowerFooter.module.css";

const LowerFooter = ({ className = "" }) => {
  return (
    <section className={[styles.lowerFooter, className].join(" ")}>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinksInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.linkItems}>
              <div className={styles.shop}>Shop</div>
            </div>
            <img
              className={styles.expandDownIcon}
              alt=""
              src="/expand-down.svg"
            />
          </div>
        </div>
        <div className={styles.footerLinksChild}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.aboutWrapper}>
              <a className={styles.about}>About</a>
            </div>
            <img
              className={styles.expandDownIcon1}
              alt=""
              src="/expand-down-1.svg"
            />
          </div>
        </div>
        <div className={styles.companyLinks}>
          <div className={styles.polkaInc}>Polka, Inc.</div>
          <div className={styles.companyInfo} />
          <div className={styles.policies}>Policies</div>
          <div className={styles.companyInfo1} />
          <div className={styles.investors}>Investors</div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.socialInfo} />
          <div className={styles.careers}>Careers</div>
          <div className={styles.socialInfo1} />
          <div className={styles.press}>Press</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.sellWrapper}>
              <div className={styles.sell}>Sell</div>
            </div>
            <img
              className={styles.expandDownIcon2}
              alt=""
              src="/expand-down.svg"
            />
          </div>
        </div>
        <div className={styles.footerLinksInner1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.helpWrapper}>
              <div className={styles.help}>Help</div>
            </div>
            <img
              className={styles.expandDownIcon3}
              alt=""
              src="/expand-down.svg"
            />
          </div>
        </div>
        <footer className={styles.socialIcons}>
          <div className={styles.socialIconsChild} />
          <img
            className={styles.facebookIcon}
            loading="lazy"
            alt=""
            src="/facebook1.svg"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/twitter1.svg"
          />
          <img
            className={styles.linkedinIcon}
            loading="lazy"
            alt=""
            src="/linkedin1.svg"
          />
          <img
            className={styles.dribbbleIcon}
            loading="lazy"
            alt=""
            src="/dribbble.svg"
          />
        </footer>
      </div>
    </section>
  );
};

LowerFooter.propTypes = {
  className: PropTypes.string,
};

export default LowerFooter;
