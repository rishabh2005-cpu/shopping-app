import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = ({
  className = "",
  rectangle19,
  propAlignSelf,
  propFlex,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv2Style}
    >
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src={rectangle19} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <div className={styles.colors}>Colors</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.ellipseParent}>
          <div className={styles.ellipseDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
          <div className={styles.frameChild5} />
          <div className={styles.frameChild6} />
        </div>
      </div>
      <div className={styles.vonnaNevaWalnutSandalyeChaParent}>
        <div className={styles.vonnaNevaWalnut}>
          Vonna Neva Walnut Sandalye Chair
        </div>
        <div className={styles.div}>195,13 $</div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  rectangle19: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default GroupComponent2;
