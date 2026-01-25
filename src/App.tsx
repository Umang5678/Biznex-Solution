// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Header from "./Components/Header/Header";
// import Work from "./Components/Work/Work";
// import Application from "./Components/Application/Application";
// import OtherApp from "./Components/Otherapp/Otherapp";
// import Question from "./Components/Question/Question";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <Work />
//       <Application />
//       <OtherApp />
//       <Question />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Work from "./Components/Work/Work";

import OtherApp from "./Components/Otherapp/Otherapp";
import Question from "./Components/Question/Question";
import Footer from "./Components/Footer/Footer";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import WorkPage from "./Components/Ourwork/ourwork";
import WebsiteDevelopment from "./pages/webdevlopment/WebsiteDevelopment";
import AppDevelopment from "./pages/Appdevelopment/AppDevelopment";
import UiUxDesign from "./pages/Ui&UxDesign/ui&uxdesign";
import Seo from "./pages/SEO/seo";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Work />

              <OtherApp />
              <Question />
              <Footer />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/workpage" element={<WorkPage />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/seo" element={<Seo />} />
      </Routes>
    </Router>
  );
}

export default App;
