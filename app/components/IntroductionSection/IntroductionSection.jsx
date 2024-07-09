"use client";

import React from "react";
import styles from "./IntroductionSection.module.css";

export default function IntroductionSection() {
  return (
    <div className={styles.introductionSection}>
      <h1 className={styles.header_1}>
        <span style={{ color: "silver" }}>Open Source Project</span>
        <br />
        for <span style={{ color: "silver" }}>Tech Bros</span>
      </h1>
    </div>
  );
}
