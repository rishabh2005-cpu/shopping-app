import PropTypes from "prop-types";
import styles from "./Footer2.module.css";

const Footer2 = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.emailSignup}>
          <div className={styles.yes}>Yes!</div>
          <div className={styles.sendMeExclusive}>
            Send me exclusive offers, unique gift ideas, and personalized tips
            for shopping and selling on Commerce.
          </div>
        </div>
        <div className={styles.emailInput}>
          <div className={styles.emailField}>
            <div className={styles.emailFieldChild} />
            <div className={styles.dropYourEmail}>Drop your Email</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.subscribe}>Subscribe</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrow-right-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
