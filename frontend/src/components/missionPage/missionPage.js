import React from "react";
import Mission from "./mission/Mission.js";
import Vision from "./vision/Vision.js";
import Values from "./values/Values.js";
import styles from "./missionPage.module.css";
import Footer from "components/layout/Footer.jsx";
// import He from "../general/navbar/Navbar.js";
// import Header from "components/layout/Header.jsx";
// import Vision from "components/mission/vision/Vision.js";
// import Values from "components/mission/values/Values.js";
import { Navbar } from "components/general";
// import Navbar from "components/general/navbar/Navbar.js";

const MissionVV = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      {/* <Header /> */}
      <Mission />
      <Vision />
      <Values />
      <Footer />
    </div>
  );
};

export default MissionVV;
