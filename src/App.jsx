import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
  Home,
  About,
  Clubs,
  Login,
  Register,
  OurStaff,
  NotFound,
} from "./pages";
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
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="staff" element={<OurStaff />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </FormProvider>
    </>
  );
};

export default App;
