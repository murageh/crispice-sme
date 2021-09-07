import Link from "next/link";
import PageLayout from "../layouts/PageLayout";
import styles from "../styles/Home.module.css"
import React from "react";
import ContactForm from "../components/content/ContactForm";

export default function Contact() {
    return (
        <>
            <main className={styles.hero}>
                <ContactForm/>

                <p>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </p>
            </main>
        </>
    );
}

Contact.Layout = PageLayout;