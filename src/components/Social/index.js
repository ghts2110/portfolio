import Header from "../Header";
import styles from "./Social.module.css";
import React from "react";

function Social() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.socialGrid}>
          <div className={styles.socialItem}>
            <img src="/icons/whatsapp.png" alt="WhatsApp" />
            <div>
              <p>WhatsApp</p>
              <span>+55 (81) 98295-0744</span>
            </div>
          </div>
          <div className={styles.socialItem}>
            <img src="/icons/email.png" alt="Email" />
            <div>
              <p>E-mail</p>
              <span>gabrieltorres2110@gmail.com</span>
            </div>
          </div>
          <div className={styles.socialItem}>
            <img src="/icons/instagram.png" alt="Instagram" />
            <div>
              <p>Instagram</p>
              <span>@gabriel__henrique_._</span>
            </div>
          </div>
          <div className={styles.socialItem}>
            <img src="/icons/linkedin.png" alt="LinkedIn" />
            <div>
              <p>LinkedIn</p>
              <span>/in/gabriel-henrique</span>
            </div>
          </div>
          <div className={styles.socialItem}>
            <img src="/icons/github.png" alt="GitHub" />
            <div>
              <p>GitHub</p>
              <span>@ghts2110</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
