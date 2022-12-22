import React, { useState } from "react";

import Upload from "./upload";
import Almost from "./almost";

import styles from "./uploadcsv.module.css";
import dummmy_dp from "./assets/dummy_dp.png";

function UploadCsv() {
  const [step, setStep] = useState(0);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.welcome__header}>
          <img src={dummmy_dp} alt="user" />

          <div>
            <h2>Hi, Iyanu</h2>
            <h2>Welcome back!</h2>
          </div>
        </div>

        {/* Switch statement to render components based on upload progress */}
        <div className={styles.upload__progress}>
          {(() => {
            switch (step) {
              case 0:
                return <Upload onNext={onNext} />;

              case 1:
                return <Almost onNext={onNext} step={step} />;

              case 2:
                return <Almost onNext={onNext} step={step} />;
              default:
                return null;
            }
          })()}
        </div>
      </section>
    </main>
  );
}

export default UploadCsv;
