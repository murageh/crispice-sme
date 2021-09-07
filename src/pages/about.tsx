import Link from "next/link";
import Image from 'next/image'
import React from "react";
import PageLayout from "../layouts/PageLayout";
import styles from "../styles/Home.module.css";
import utilStyles from '../styles/utils.module.css'


export default function About() {
    const name = "Murageh";

    return (
        <main className={styles.main}>
            <h1 className={styles.sub_title}>
            </h1>

            <header className={styles.header}>
                {
                    <>
                        <Image
                            priority
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                }
            </header>

            <p>
                <b>Programmer | Mobile & Web App developer | Digital Influencer & Strategist.</b>
            </p>
            <p>
                <em>
                    <i>
                        "Murageh is a tech guru, website and app developer, digital marketing guru,
                        and a social media influencer."
                    </i>
                </em>
            </p>
            <p className={styles.p_about}>
                While I may identify by many names and titles, my main goal is to enable you as a business, NGO, brand,
                personality or individual, to stoically stand out from the rest. Like a beacon 😀.
            </p>
            <p className={styles.p_about}>
                In today's world, a business is only as good as it sells itself. And while that takes effort,
                why should you take on the fight alone? Let's take it on together as a team, and make sure you not only
                stand out from your competitors, but also make money while you outshine them!
            </p>
            <p className={styles.p_about}>
                So, what do you say? Get in touch.<br />
                <a className={styles.p_about_a} href={"/contact"}>Send me a message.</a>
            </p>

            <p >
                <Link href="/">
                    <a>Back to Home page</a>
                </Link>
            </p>
        </main>
    );
}

About.Layout = PageLayout;