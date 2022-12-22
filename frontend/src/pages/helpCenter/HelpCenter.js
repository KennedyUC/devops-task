import React from "react";
import { Link } from "react-router-dom";
import styles from "./HelpCenter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { MdOutlineSettings } from "react-icons/md";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const HelpCenter = () => {
  return (
    <>
      <Header />
      <div className={styles.help_center}>
        <div>
          <h3 className={styles.headings}>We are here to help you</h3>
          <p className={styles.paragraphs}>
            Find advice and answers from our support team fast or get in touch
          </p>
        </div>
        <div className={styles.search_container}>
          <div className={styles.search_div}>
            <AiOutlineSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for answers..."
              className={styles.inputs}
            />
          </div>
        </div>
        <div className={styles.category_div}>
          <h5 className={styles.headings}>Browse the Categories</h5>
          <div className={styles.cards}>
            <Link to="/faq">
              <div className={styles.card}>
                <TiMessages className={styles.icons} />
                <h6>FAQs</h6>
                <p>Get answers to questions frequently asked by users</p>
              </div>
            </Link>
            <Link to="/docs">
              <div className={styles.card}>
                <RiFileList2Line className={styles.icons} />
                <h6>API Documentation</h6>
                <p>
                  Detailed instructions on how to effectively use and integrate
                  our API
                </p>
              </div>
            </Link>
            <div className={styles.card}>
              <MdOutlineSettings className={styles.icons} />
              <h6>Settings</h6>
              <p>Answers to most configuration issues</p>
            </div>
          </div>
        </div>
        <div className={styles.question_div}>
          <h5 className={styles.headings}>
            Didn’t find an answer to your questions?
          </h5>
          <p className={styles.paragraphs}>
            Get in touch with us for details on additional support and services
          </p>
          <form className={styles.forms}>
            <div className={styles.forms_div}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <textarea
              name="question"
              id="questions"
              cols="30"
              rows="10"
              placeholder="Enter your question here..."
              required></textarea>
            <input
              type="submit"
              value={"Get in Touch"}
              className={styles.submit}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HelpCenter;
