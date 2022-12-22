import React from "react";
import styled from "styled-components";
import styles from "./vision.module.css";
import vissionImg from "../assets/vision.svg";
const Vision = () => {
  return (
    <div className={styles.vision}>
      <div>
        {" "}
        <h2 className={styles.h2}>Our Vision</h2>{" "}
        <img className={styles.img} src={vissionImg} />
        <p className={styles.p}>
          Our Vision is to create the most effective and easy to integrate API,
          that helps our user identify the highest raanking customers that are
          visiting their website
        </p>
        <p className={styles.p}>
          We aim to provide all the necessary support and data for businesses to
          make informed sale and marketing campaign decisions.
        </p>
      </div>
    </div>
  );
};

export default Vision;
