"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/images/LOGO.png" alt="Techtonix Logo" width={50} height={50} />
          <h1 className={styles.word}>TECHTONIX</h1>
        </div>
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksMobile : ''}`}>
          <li className={styles.home}>
            <a href="/" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/feed" className={styles.navLink}>Feed</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>About</a>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}><a href="/about">Mission</a></li>
              <li className={styles.dropdownItem}><a href="/about/timeline">Timeline</a></li>
            </ul>
          </li>
          
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>App Test</a>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}><a href="/appTest">Testers</a></li>
              <li className={styles.dropdownItem}><a href="/appTest/apps">Apps</a></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <a href="/contributors" className={styles.navLink}>Contributors</a>
          </li>
          <li className={styles.navItem}>
            <a href="/login" className={styles.navLink}>Login</a>
          </li>
        </ul>
        <div className={styles.mobileMenuButton} onClick={handleMobileMenuToggle}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Header;
