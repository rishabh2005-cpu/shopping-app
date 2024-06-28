import Header2 from "../components/Header2";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import FrameComponent4 from "../components/FrameComponent4";
import NewsletterSignup from "../components/NewsletterSignup";
import EmailCapture from "../components/EmailCapture";
import Footer1 from "../components/Footer1";
import styles from "./DeviceLargeTablet.module.css";

const DeviceLargeTablet = () => {
  return (
    <div className={styles.deviceLargeTablet}>
      <div className={styles.deviceLargeTabletChild} />
      <Header2 />
      <main className={styles.content}>
        <Banner />
        <Featured />
        <FrameComponent4 />
        <NewsletterSignup />
        <EmailCapture />
      </main>
      <Footer1 />
    </div>
  );
};

export default DeviceLargeTablet;
