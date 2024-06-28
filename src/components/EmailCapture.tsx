import PropTypes from "prop-types";
import styles from "./EmailCapture.module.css";

const EmailCapture = ({ className = "" }) => {
  return (
    <section className={[styles.emailCapture, className].join(" ")}>
      <div className={styles.emailCaptureChild} />
      <div className={styles.yesParent}>
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
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.emailLabel}>
          <div className={styles.dropYourEmail}>Drop your Email</div>
        </div>
        <div className={styles.subscriptionButton}>
          <div className={styles.subscriptionButtonChild} />
          <div className={styles.subscribe}>Subscribe</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrow-right-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

EmailCapture.propTypes = {
  className: PropTypes.string,
};

export default EmailCapture;
