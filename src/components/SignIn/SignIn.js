import React from "react";
import styles from "./SignIn.module.css";
import createAccountStyles from "../CreateAccount/CreateAccount.module.css";
import { Link } from "react-router";

function SignIn() {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.heading}>Signin to your PopX account</p>
        <p className={styles.sub_heading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form style={{ marginTop: "-2rem" }}>
          <div className={createAccountStyles.form_element}>
            <div className={createAccountStyles.input_container}>
              <div className={createAccountStyles.input_label_container}>
                <label
                  for="fullname"
                  className={createAccountStyles.input_label}
                >
                  Emai Address
                </label>
              </div>
              <input
                id="fullname"
                className={createAccountStyles.input_block}
                type="text"
                placeholder="Enter email Address"
              />
            </div>
          </div>

          <div className={createAccountStyles.form_element}>
            <div className={createAccountStyles.input_container}>
              <div className={createAccountStyles.input_label_container}>
                <label
                  for="fullname"
                  className={createAccountStyles.input_label}
                >
                  Password
                </label>
              </div>
              <input
                id="fullname"
                className={createAccountStyles.input_block}
                type="text"
                placeholder="Enter password"
              />
            </div>
          </div>

          <Link >
            <button
              style={{
                position: "absolute",
                top: "335px",
                backgroundColor: "#CBCBCB",
              }}
              className={createAccountStyles.create_account}
            >
              <span className={createAccountStyles.create_account_text}>
                Login
              </span>
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignIn;
