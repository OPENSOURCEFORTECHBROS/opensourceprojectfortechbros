"use client";

import React from "react";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
  return (
    <footer className={styles.appFooter_parent}>
      <div>
        <a href="/">Open Source Project for Tech Bros</a>
      </div>
      <div>
        <h4>About</h4>
        <p>
          This platform that serves as a central hub for tech enthusiasts in
          South Africa. The platform will provide listings of active local
          social media groups, showcase projects by community members, list tech
          events in South Africa, and offer access to volunteer mentors.
        </p>
      </div>
      <div>
        <ul> 
          <li>
            <a href="#home">Tech Communities</a>
          </li>
          <li>
            <a href="#link">Cummunity</a>
          </li>
          <li>
            <a href="#link">Mentorship</a>
          </li>
          <li>
            <a href="#link">Find A Job</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
