import PropTypes from "prop-types";
import styles from "./Footer1.module.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerTop}>
        <div className={styles.sustainability}>
          <div className={styles.sustainabilityChild} />
          <div className={styles.commerceIsPowered}>
            Commerce, is powered by 100% renewable electricity.
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.logoParent}>
                <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
                <div className={styles.cricklewoodLondonNw2Container}>
                  <p className={styles.cricklewood}>Cricklewood,</p>
                  <p className={styles.londonNw26qg}>London NW2 6qg, Uk</p>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.facebookParent}>
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
                  </div>
                  <div className={styles.linkedinParent}>
                    <img
                      className={styles.linkedinIcon}
                      loading="lazy"
                      alt=""
                      src="/linkedin.svg"
                    />
                    <img
                      className={styles.dribbbleIcon}
                      alt=""
                      src="/dribbble.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.shopParent}>
                <div className={styles.shop}>Shop</div>
                <div className={styles.giftCardsParent}>
                  <div className={styles.giftCards}>Gift cards</div>
                  <div className={styles.siteMap}>Site map</div>
                  <div className={styles.polkaBlog}>Polka blog</div>
                  <div className={styles.login}>Login</div>
                  <div className={styles.signIn}>Sign in</div>
                </div>
              </div>
            </div>
            <div className={styles.aboutParent}>
              <div className={styles.about}>About</div>
              <div className={styles.polkaIncParent}>
                <div className={styles.polkaInc}>Polka, Inc.</div>
                <div className={styles.policies}>Policies</div>
                <div className={styles.investors}>Investors</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.press}>Press</div>
              </div>
            </div>
            <div className={styles.sellParent}>
              <div className={styles.sell}>Sell</div>
              <div className={styles.sellOnPolkaParent}>
                <div className={styles.sellOnPolka}>Sell on Polka</div>
                <div className={styles.teams}>Teams</div>
                <div className={styles.forums}>Forums</div>
                <div className={styles.affiliates}>Affiliates</div>
              </div>
            </div>
            <div className={styles.helpParent}>
              <div className={styles.help}>Help</div>
              <div className={styles.helpCenterParent}>
                <div className={styles.helpCenter}>Help Center</div>
                <div className={styles.trustAndSafety}>Trust and safety</div>
                <div className={styles.privacySettings}>Privacy settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerInner}>
        <div className={styles.commerceIncParent}>
          <div className={styles.commerceInc}>© 2022 Commerce, Inc.</div>
          <div className={styles.privacyPolicyParent}>
            <div className={styles.privacyPolicy}>Privacy policy</div>
            <div className={styles.termsOfUse}>Terms of use</div>
            <div className={styles.cookies}>Cookies</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.scrollToTopParent}>
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

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
