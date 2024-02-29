import React, { useState } from "react";
import styles from "../styles/Join.module.css";
import Image from "next/image";
import Logo from "./joinlogo.png";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};
const Join = () => {
  const [name, setname] = useState("");

  return (
    <div className={styles.JoinPage}>
      <div className={styles.JoinContainer}>
        <Image src={Logo} width={400} height={400} alt="logo" />
        <h1 style={{ color: "crimson" }}>ICHAT</h1>
        <input
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
          className={styles.joinInput}
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          href="/Chat"
        >
          <button onClick={sendUser} className={` ${styles.joinBtn}`}>
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
