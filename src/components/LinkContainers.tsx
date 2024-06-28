import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./LinkContainers.module.css";

const LinkContainers = ({
  className = "",
  linkBackgrounds,
  craftKits,
  propGap,
  propFlex,
  propWidth,
}) => {
  const linkContainersStyle = useMemo(() => {
    return {
      gap: propGap,
      flex: propFlex,
      width: propWidth,
    };
  }, [propGap, propFlex, propWidth]);

  return (
    <div
      className={[styles.linkContainers, className].join(" ")}
      style={linkContainersStyle}
    >
      <div className={styles.linkElements}>
        <div className={styles.linkElementsChild} />
        <img
          className={styles.linkBackgroundsIcon}
          loading="lazy"
          alt=""
          src={linkBackgrounds}
        />
      </div>
      <div className={styles.linkLabels}>
        <div className={styles.craftKits}>{craftKits}</div>
      </div>
    </div>
  );
};

LinkContainers.propTypes = {
  className: PropTypes.string,
  linkBackgrounds: PropTypes.string,
  craftKits: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
};

export default LinkContainers;
