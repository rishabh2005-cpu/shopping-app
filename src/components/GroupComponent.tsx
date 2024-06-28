import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  rectangle19,
  woodLampFloorLampLambader,
  emptyDescription,
  propBackgroundColor,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <img className={styles.frameItem} alt="" src="/group-1.svg" />
      <div className={styles.cardElementsParent}>
        <div className={styles.cardElements}>
          <div className={styles.cardDetails}>
            <div className={styles.cardColors}>
              <img
                className={styles.cardColorsChild}
                alt=""
                src={rectangle19}
              />
              <div className={styles.colors}>Colors</div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameInner} />
              <div className={styles.ellipseDiv} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild3} />
            </div>
          </div>
          <div className={styles.woodLampFloor}>
            {woodLampFloorLampLambader}
          </div>
        </div>
        <div className={styles.emptyDescription}>{emptyDescription}</div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  rectangle19: PropTypes.string,
  woodLampFloorLampLambader: PropTypes.string,
  emptyDescription: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
};

export default GroupComponent;
