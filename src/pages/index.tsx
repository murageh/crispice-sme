import styles from "../styles/Home.module.css";
import PageLayout from "../layouts/PageLayout";
import {ServicesContent} from "../components/content/ServicesContent";
import React from "react";
import WorkContent from "../components/content/WorkContent";
import ContactForm from "../components/content/ContactForm";
import WhyChooseUs from "../components/content/WhyChooseUs";

export default function Home(){

    const CollapsibleHeader = "What else am I? 😁";
    const CollapsibleContent =
        <section className={styles.inline_section} id={"#collapsible_skills"}>
            <code><a href={"#"}>web developer</a></code>
            <code><a href={"#"}>mobile app developer</a></code>
            <code><a href={"#"}>digital marketing pro</a></code>
            <code><a href={"#"}>entrepreneur</a></code>
        </section>;

    return (
        <>
            <main className={styles.hero}>
                <h1 className={styles.title}>
                    Great businesses need awesome websites.
                </h1>

                <p className={styles.description}>
                    We help businesses, brands, and individuals like you, stand out from
                    <b> the rest. </b> We deliver beautifully crafted websites
                    that give you maximum conversions. <br /><br />
                </p>

                <a href="#contact-name" className={`${styles.call_to_action}`}>
                    <h2>Book a free consultation {" "} &rarr;</h2>
                </a>
            </main>
            <div className={styles.content}>
                <WhyChooseUs/>
                <WorkContent/>
                <ServicesContent/>
                <ContactForm />
            </div>
        </>
    );
}

Home.Layout = PageLayout;

