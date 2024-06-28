import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footer1}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <div className={styles.cricklewoodlondonNw26qgContainer}>
              <p className={styles.cricklewoodlondon}>Cricklewood,London</p>
              <p className={styles.nw26qgUk}>NW2 6qg, Uk</p>
            </div>
            <div className={styles.social}>
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/facebook.svg"
              />
              <img
                className={styles.twitterIcon}
                loading="lazy"
                alt=""
                src="/twitter.svg"
              />
              <img
                className={styles.linkedinIcon}
                loading="lazy"
                alt=""
                src="/linkedin.svg"
              />
              <img className={styles.dribbbleIcon} alt="" src="/dribbble.svg" />
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.aboutShopLinks}>
              <div className={styles.shop}>Shop</div>
              <div className={styles.cardsPolicyLinks}>
                <div className={styles.giftCards}>Gift cards</div>
                <div className={styles.siteMap}>Site map</div>
                <div className={styles.polkaBlog}>Polka blog</div>
                <div className={styles.login}>Login</div>
                <div className={styles.signIn}>Sign in</div>
              </div>
            </div>
            <div className={styles.sellWrapper}>
              <div className={styles.sell}>Sell</div>
              <div className={styles.sellOptions}>
                <div className={styles.sellOnPolka}>Sell on Polka</div>
                <div className={styles.teams}>Teams</div>
                <div className={styles.forums}>Forums</div>
                <div className={styles.affiliates}>Affiliates</div>
              </div>
            </div>
            <div className={styles.aboutShopLinks1}>
              <a className={styles.about}>About</a>
              <div className={styles.polkaIncParent}>
                <div className={styles.polkaInc}>Polka, Inc.</div>
                <div className={styles.policies}>Policies</div>
                <div className={styles.investors}>Investors</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.press}>Press</div>
              </div>
            </div>
            <div className={styles.helpWrapper}>
              <div className={styles.help}>Help</div>
              <div className={styles.helpOptions}>
                <div className={styles.helpCenter}>Help Center</div>
                <div className={styles.trustAndSafety}>Trust and safety</div>
                <div className={styles.privacySettings}>Privacy settings</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.legal}>
          <div className={styles.commerceInc}>© 2022 Commerce, Inc.</div>
          <div className={styles.legalLinks}>
            <div className={styles.privacyPolicy}>Privacy policy</div>
            <div className={styles.termsOfUse}>Terms of use</div>
            <div className={styles.cookies}>Cookies</div>
          </div>
          <div className={styles.scrollTopWrapper}>
            <div className={styles.scrollTopContent}>
              <div className={styles.scrollToTop}>Scroll to top</div>
              <img
                className={styles.arrowTopIcon}
                loading="lazy"
                alt=""
                src="/arrow-top.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
