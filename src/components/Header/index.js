import styles from "./Header.module.css";
import React, { useState } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("portfolio");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <img src="/I.jpeg" alt="Gabriel" className={styles.profileImg} />
        <h1>Gabriel Tôrres</h1>
        <nav>
          <ul>
            <li>
              <a
                href="/portfolio"
                className={activeSection === "portfolio" ? styles.active : ""}
                onClick={() => handleSetActive("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#Summary"
                className={activeSection === "summary" ? styles.active : ""}
                onClick={() => handleSetActive("summary")}
              >
                Summary
              </a>
            </li>
            <li>
              <a
                href="#Social"
                className={activeSection === "social" ? styles.active : ""}
                onClick={() => handleSetActive("social")}
              >
                Social
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
