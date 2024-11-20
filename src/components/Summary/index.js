import Header from "../Header";
import styles from "./Summary.module.css";
import React from 'react';

function Summary() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
}

export default Summary;
