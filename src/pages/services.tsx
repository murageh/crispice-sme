import Link from "next/link";
import PageLayout from "../layouts/PageLayout";
import styles from "../styles/Home.module.css";
import {ServicesContent} from "../components/content/ServicesContent";
import React from "react";

export default function Services(){
    return (
        <main className={styles.main}>
            <div className={styles.intro + " " + styles.top_margin}>
                {/*<h1 className={homeStyles.sub_title}>Services</h1>*/}
            </div>

            <ServicesContent/>
            <p>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </p>
        </main>
    );
}

Services.Layout = PageLayout;