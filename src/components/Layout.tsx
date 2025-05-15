
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

export function Layout() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }} // Simplified: only fade
          animate={{ opacity: 1 }} // Simplified: only fade
          exit={{ opacity: 0 }}    // Simplified: only fade
          transition={{ duration: 0.2 }} // Faster transition
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

