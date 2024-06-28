import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DeviceLargeDesktop from "./pages/DeviceLargeDesktop";
import DeviceLargeDesktopV from "./pages/DeviceLargeDesktopV";
import DeviceLargeTablet from "./pages/DeviceLargeTablet";
import DeviceSmallMobile from "./pages/DeviceSmallMobile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/device-large-desktop-v2":
        title = "";
        metaDescription = "";
        break;
      case "/device-large-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/device-small-mobile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DeviceLargeDesktop />} />
      <Route
        path="/device-large-desktop-v2"
        element={<DeviceLargeDesktopV />}
      />
      <Route path="/device-large-tablet" element={<DeviceLargeTablet />} />
      <Route path="/device-small-mobile" element={<DeviceSmallMobile />} />
    </Routes>
  );
}
export default App;
