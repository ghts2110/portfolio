import styles from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
      <img src={process.env.PUBLIC_URL + "/I.jpeg"} alt="Gabriel" className={styles.profileImg} />
      <h1>Gabriel Tôrres</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/summary"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Summary
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/social"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Social
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
