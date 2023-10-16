import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContextProvider, useThemeContext } from "./context/ThemeContext";
// import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

function AppContent() {
  const { theme, mousePosition, mouseVariant } = useThemeContext();

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    link: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
  };

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // if (loading) return <SplashScreen />;
  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <motion.div id={theme} className="dark:bg-bgDark relative">
          <div className="w-full h-[60px]"></div>
          <motion.div
            className="cursor"
            variants={variants}
            animate={mouseVariant}
          />
          <Navbar />
          <Outlet />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
