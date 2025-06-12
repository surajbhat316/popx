import React from "react";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.header}>Welcome to PopX</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button className={styles.create_account}>
          <span className={styles.create_account_text}>Create Account</span>
        </button>

         <button className={styles.already_registered_login}>
          <span className={styles.already_registered_login_text}>Already Registered? Login</span>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
