import React from "react";
import styles from "./CreateAccount.module.css";
import { Link } from "react-router";

function CreateAccount() {
  return (
    <div className={styles.box}>
      <p className={styles.heading}>Create your PopX account</p>

      <form>
        <div className={styles.form_element}>
            <div className={styles.input_container}>
                <div className={styles.input_label_container}>
                    <label for="fullname" className={styles.input_label} >
                        Full Name*
                    </label>
                </div>
                <input id="fullname" className={styles.input_block} type="text" />
            </div>
        </div>

        <div className={styles.form_element}>
            <div className={styles.input_container}>
                <div className={styles.input_label_container}>
                    <label for="fullname" className={styles.input_label} >
                        Phone number*
                    </label>
                </div>
                <input id="fullname" className={styles.input_block} type="text" />
            </div>
        </div>

        <div className={styles.form_element}>
            <div className={styles.input_container}>
                <div className={styles.input_label_container}>
                    <label for="fullname" className={styles.input_label} >
                        Email address*
                    </label>
                </div>
                <input id="fullname" className={styles.input_block} type="text" />
            </div>
        </div>

        <div className={styles.form_element}>
            <div className={styles.input_container}>
                <div className={styles.input_label_container}>
                    <label for="fullname" className={styles.input_label} >
                        Password*
                    </label>
                </div>
                <input id="fullname" className={styles.input_block} type="text" />
            </div>
        </div>

        <div className={styles.form_element}>
            <div className={styles.input_container}>
                <div style={{width: "101px"}} className={styles.input_label_container}>
                    <label for="fullname" className={styles.input_label} >
                        Company Name*
                    </label>
                </div>
                <input id="fullname" className={styles.input_block} type="text" />
            </div>
        </div>

        <div className={styles.agency_container}>
            <div>
            <p>Are you an Agency?*</p>

            </div>

            <div style={{display: "flex"}}>
                <div style={{display: "flex",justifyContent:"center", alignItems: "center"}}>
                    <input name="radio" type="radio" />
                    <span>Yes</span>
                </div>

                <div style={{display: "flex",justifyContent:"center", alignItems: "center"}}>
                    <input style={{marginLeft: "12px"}} name="radio" type="radio" />
                    <span>No</span>
                </div>
            </div>
        </div>

        <Link to="/settings" >
            <button className={styles.create_account}>
                <span className={styles.create_account_text}>Create Account</span>
            </button>        
        </Link>


      </form>
    </div>
  );
}

export default CreateAccount;
