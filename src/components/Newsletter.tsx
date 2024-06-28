import PropTypes from "prop-types";
import styles from "./Newsletter.module.css";

const Newsletter = ({ className = "" }) => {
  return (
    <div className={[styles.newsletter, className].join(" ")}>
      <div className={styles.newsletterChild} />
      <div className={styles.newsletterForm}>
        <div className={styles.yes}>Yes!</div>
        <div className={styles.sendMeExclusiveContainer}>
          <p className={styles.sendMeExclusive}>
            Send me exclusive offers, unique gift ideas, and personalized
          </p>
          <p className={styles.tipsForShopping}>
            tips for shopping and selling on Commerce.
          </p>
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.emailLabel}>
              <div className={styles.dropYourEmail}>Drop your Email</div>
            </div>
            <div className={styles.submitButton}>
              <div className={styles.submitButtonChild} />
              <div className={styles.subscribe}>Subscribe</div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/arrow-right-1.svg"
              />
            </div>
          </div>
          <div className={styles.firstOrderOnlyYoureReadyWrapper}>
            <div className={styles.firstOrderOnly}>
              First order only. You’re ready?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
