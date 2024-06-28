import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  className = "",
  rectangle73,
  distressedToteLeatherBagL,
  emptySlideList,
  propFlex,
  propAlignSelf,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <img className={styles.frameItem} alt="" src={rectangle73} />
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/group-1-4.svg"
        />
      </div>
      <div className={styles.distressedToteLeatherBagLeWrapper}>
        <div className={styles.distressedToteLeather}>
          {distressedToteLeatherBagL}
        </div>
      </div>
      <div className={styles.emptySlideListWrapper}>
        <div className={styles.emptySlideList}>{emptySlideList}</div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle73: PropTypes.string,
  distressedToteLeatherBagL: PropTypes.string,
  emptySlideList: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent1;
