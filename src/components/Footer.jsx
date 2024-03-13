import React from "react";
import styles from "./Footer.module.css";
export default function Footer({ completetodo, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completetodo:{completetodo}</span>
      <span className={styles.item}>totaltodos:{totaltodos}</span>
    </div>
  );
}
