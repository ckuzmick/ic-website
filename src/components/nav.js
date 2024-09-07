import React from "react";
import styles from "@/styles/nav.module.css";
import "@/styles/globals.css";

const Nav = (slideDown) => {
    if (slideDown) {
        return (
            <div className={styles.movingbar}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className={styles.bar}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default Nav;