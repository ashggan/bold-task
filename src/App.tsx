import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContextProvider, useThemeContext } from "./context/ThemeContext";
// import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import SplashScreen from "./components/splashScreen";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

function AppContent() {
  const { theme, mousePosition } = useThemeContext();

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

  const [_loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // if (loading) return <SplashScreen />;

  return (
    <>
      <motion.div id={theme} className="dark:bg-bgDark relative">
        <div className="w-full h-[60px]"></div>
        <motion.div className="cursor" variants={variants} animate="default" />
        <Navbar />
        <Outlet />
        <Footer />
      </motion.div>
    </>
  );
}
