import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import FooterContent from "../components/FooterContent";
import Footer from "../components/Footer";
import styles from "./DeviceLargeDesktop.module.css";

const DeviceLargeDesktop = () => {
  return (
    <div className={styles.deviceLargeDesktop}>
      <div className={styles.deviceLargeDesktopChild} />
      <Header />
      <section className={styles.content}>
        <HeroBanner />
        <ProductGrid />
      </section>
      <section className={styles.footer}>
        <FooterContent />
      </section>
      <section className={styles.sustainability}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.commerceIsPowered}>
            Commerce, is powered by 100% renewable electricity.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DeviceLargeDesktop;
