import React from "react";
import styles from "./Welcome.module.css";
import { Link } from "react-router";

function Welcome() {
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.header}>Welcome to PopX</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <Link to="/create-account" >
            <button className={styles.create_account}>
            <span className={styles.create_account_text}>Create Account</span>
            </button>        
        </Link>

        <Link to="/sign-in" >
          <button className={styles.already_registered_login}>
            <span className={styles.already_registered_login_text}>Already Registered? Login</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
