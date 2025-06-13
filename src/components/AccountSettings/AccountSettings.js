import React from 'react'
import styles from "./AccountSettings.module.css"
import image from "./profile.png";
import camera from "./camera.svg";


function AccountSettings() {
    console.log("image ", image)
  return (

    <div className={styles.box}>
      <div className={styles.account_settings}>
        <p className={styles.account_settings_text}>Account Settings</p>
      </div>

      <div className={styles.profile_info}>
        <div className={styles.profile_image}>
            <img className={styles.image} src={image} alt='profile'/>
            <img className={styles.svg} src={camera}  alt="svg"/>
        </div>
      </div>

      <div className={styles.profile_name}>
        <p className={styles.userName}>Marry Doe</p>
        <p className={styles.email}>Marry@Gmail.Com</p>
      </div>

      <div className={styles.about}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>


  )
}

export default AccountSettings
