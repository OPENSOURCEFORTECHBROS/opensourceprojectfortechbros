"use client";

import React from "react";
import styles from "./ContributorsSpecialThanks.module.css";

export default function ContributorsSpecialThanks({ contributors = false }) {
  React.useEffect(() => {
    console.log("contributors", contributors);
  }, [contributors]);
  //
  if (contributors === false) return <h1>Loading...</h1>;
  if (!contributors) return <h1>No contributors where found...</h1>;
  //
  return (
    <div className={styles.parent}>
      <h1 className={styles.header_1}>
        <span style={{ color: "white" }}>Special</span>{" "}
        <span style={{ color: "white" }}>Thanks</span>
        <br />
        <span style={{ color: "white" }}>To Our</span>{" "}
        <span style={{ color: "silver" }}>Contributors</span>
      </h1>
      <div className={styles.contributors_parent}>
        {contributors?.map((contributor, index) => (
          <a
            key={index}
            target="_blank"
            className={styles.contributors_link}
            href={contributor?.github_account_url}
          >
            <div className={styles.contributor_parent}>
              <div
                className={styles.contributors_image}
                style={{
                  backgroundImage: `url('${contributor?.github_account_url}.png')`,
                }}
              />
              <div className={styles.contributors_content}>
                <h6 className={styles.contributors_name}>
                  {contributor?.display_name}
                </h6>
                Github
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
