"use client";

import React from "react";
import styles from "./Content1.module.css";

export default function Content1({ articles = false }) {
  React.useEffect(() => {
    console.log("articles", articles);
  }, [articles]);

  if (articles === false) return <h1>Loading...</h1>;
  if (!articles) return <h1>No articles where found...</h1>;

  return (
    <main className={styles.parent}>
      <h4>Latest Updates</h4>
      <hr />
      {articles?.map((article, index) => (
        <article className={styles.article_parent} key={index}>
          <div
            className={styles.article_image}
            style={{
              backgroundImage: `url('${article?.feature_image}')`,
            }}
          ></div>
          <div className={styles.article_content}>
            <p>
              <b>{article?.title}</b>
            </p>
            <p>{article?.content}</p>
          </div>
        </article>
      ))}
    </main>
  );
}
