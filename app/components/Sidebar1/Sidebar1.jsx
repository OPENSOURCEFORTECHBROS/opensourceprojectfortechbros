"use client";

import React from "react";
import styles from "./Sidebar1.module.css";

export default function Sidebar1({
  data = false,
  title = "No Title",
  description = "No description",
  color = "silver",
}) {
  React.useEffect(() => {
    console.log(title + " data", data);
  }, [data]);

  if (data === false) return <h1>Loading...</h1>;
  if (!data) return <h1>No data was found...</h1>;
  //
  return (
    <div className={styles.parent} style={{ borderColor: color }}>
      <div
        style={{
          padding: "10px 0px",
          backgroundColor: color,
        }}
      >
        <div className={styles.headingParent}>
          <h5>{title}</h5>
        </div>
        <h6 className={styles.description_text}>
          <i>{description}</i>
        </h6>
      </div>

      {/* Tech Communities */}
      {title === "Tech Communities" && (
        <ul className={styles.standard_ul}>
          {Object.keys(data)?.map((platform, index1) => (
            <span key={index1}>
              {data[platform]?.map((community, index2) => (
                <li
                  className={styles.standard_li}
                  style={{ borderTopColor: color }}
                  key={index2}
                >
                  <a href={community} target="_blank">
                    <h6 className={styles.standard_li_header}>
                      👥 {platform} {index2 + 1}
                    </h6>
                  </a>
                </li>
              ))}
            </span>
          ))}
        </ul>
      )}

      {/* Community Updates */}
      {title === "Community Updates" && (
        <ul className={styles.standard_ul}>
          {data?.map((update, index1) => (
            <li
              key={index1}
              className={styles.standard_li}
              style={{ borderTopColor: color }}
            >
              <a href="#">
                <h6 className={styles.standard_li_header}>{update?.title}</h6>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Find A Job */}
      {title === "Find A Job" && (
        <ul className={styles.standard_ul}>
          {data?.map((job, index1) => (
            <li
              key={index1}
              className={styles.standard_li}
              style={{ borderTopColor: color }}
            >
              <a
                href={job?.link}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h6 className={styles.standard_li_header}>• {job?.title}</h6>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Mentorship */}
      {title === "Mentorship" && (
        <ul className={styles.standard_ul}>
          {data?.map((mentor, index1) => (
            <li
              key={index1}
              className={styles.standard_li}
              style={{ borderTopColor: color }}
            >
              <a href="#">
                <h6 className={styles.standard_li_header}>
                  • {mentor?.display_name}
                </h6>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    padding: 0,
                    margin: "0px 0px 0px 10px",
                  }}
                >
                  {mentor?.bio}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
