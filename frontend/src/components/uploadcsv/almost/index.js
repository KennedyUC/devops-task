import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "components/progressbar";

import styles from "./almost.module.css";

export default function Almost(props) {
  const { step } = props;
  return (
    <div className={styles.almost}>
      <ProgressBar step={step} />

      <div></div>
    </div>
  );
}

Almost.propTypes = {
  step: PropTypes.number
};
