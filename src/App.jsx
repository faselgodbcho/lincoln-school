import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import OurStaff from "./pages/OurStaff";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import useScrollToTop from "./hooks/useScrollToTop";
import { FormProvider } from "./contexts/FormContext";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useScrollToTop();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <>
      <FormProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="staff" element={<OurStaff />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </FormProvider>
    </>
  );
};

export default App;
