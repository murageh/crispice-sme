import Link from "next/link";
import PageLayout from "../layouts/PageLayout";
import {
    BEVERLY_DIGITAL,
    BEVERLY_WEB,
    JIJI_KE_AMBASSADOR,
    JUJA_PREPARATORY_DIGITAL,
    PEBOA_ELECTRICALS_WEB, PENIEL_WEB,
    TUNDA_FARM_WEB,
    WorkContent,
    WOWZI_INFLUENCER, TUNU_APP
} from "../components/content/work/WorkContent";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/work.page.module.css"
import React from "react";
import Collapsible from "../components/Collapsible";
import sectionStyles from "../styles/home.sections.module.css";
import {useRouter} from "next/router";
import {homePage} from "../components/content/ServicesContent";

export const PENIEL_SITE = "https://peniel.netlify.app";
export const JPSS_SITE = "https://www.jujapreparatory.ac.ke";
export const TUNU_SITE = "https://tunu.app";
export const JIJI_SITE = "https://jiji.co.ke";

export default function Projects() {

    return (
        <>
            <div className={styles.intro}>
                <h1 className={homeStyles.sub_title}>Work & Projects</h1>
                <p className={homeStyles.smaller_description}>
                    Over the years, my team and I have worked with clients on a variety of projects ranging from
                    website design and development, digital marketing, digital marketing strategy and planning,
                    graphics design, brand design, as well as being a social influencer and brand ambassador
                    for various brands.
                </p>
            </div>

            <div className={`${homeStyles.content} ${styles.container}`}>
                <h1 className={`${homeStyles.sub_title} ${styles.small_title}`}>Projects overview</h1>
                {
                    WorkContent.map((work, index) =>
                        <div className={styles.section}>
                            <Collapsible
                                open={false}
                                leftAligned={true}
                                Title={<h2 className={styles.section_title}>{work.title} | {work.description}</h2>}
                                children={
                                    <div className={styles.description}>
                                        {Content(work.id, work.image, work.website)}
                                    </div>
                                }
                            />
                        </div>
                    )
                }
            </div>

            <p>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </p>
        </>
    );
}

export const Content = (key, image, website) => {
    switch (key) {
        case TUNU_APP:
            return TunuApp(key, website)
        case PENIEL_WEB:
            return PenielWebsite(key, website)
        case BEVERLY_WEB:
            return BeverlyWebsite(key, website)
        case BEVERLY_DIGITAL:
            return BeverlyDigital(key, website)
        case JUJA_PREPARATORY_DIGITAL:
            return JujaPreparatoryDigital(key, website)
        case JIJI_KE_AMBASSADOR:
            return JijiKEAmbassador(key, website)
        case WOWZI_INFLUENCER:
            return WowziInfluencer(key, website)
        case TUNDA_FARM_WEB:
            return TundaFarmWebsite(key, website)
        case PEBOA_ELECTRICALS_WEB:
            return PeboaElectricals(key, website)
        default:
            return <></>
    }
}

const TunuApp = (key, website) => {
    return (
        <>
            <div className={sectionStyles.sections_intro} key={key}>
                <a
                    href={website}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div
                        className={`${sectionStyles.image_holder} ${sectionStyles.tunu_app}`}
                        data-content={"Visit website"}
                    />
                </a>
                <div className={sectionStyles.image_right}>
                    <p>
                        Tunu App is a Kenyan Start-up that has partnered with businesses and brands to provide discounts for
                        customers on all goods and services.
                    </p>
                    <p><a href={TUNU_SITE}>Visit website &rarr;</a></p>
                </div>
            </div>
            <div className={styles.bottom_section}>
                <p>
                    We worked extensively to develop their internal ERP (Enterprise resource planning) syatem, which
                    is simply the integrated management of main business processes, in real time and mediated by software
                    and technology.
                </p>
            </div>
        </>
    )
}

const PenielWebsite = (key, website) => {
    return (
        <>
            <div className={sectionStyles.sections_intro} key={key}>
                <a
                    href={website}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div
                        className={`${sectionStyles.image_holder} ${sectionStyles.peniel_homes}`}
                        data-content={"Visit website"}
                    />
                </a>
                <div className={sectionStyles.image_right}>
                    <p>
                        Peniel Charity Homes is an international non-profit organization wishing to operate all over the
                        world. It is there to support and prove to the extreme poverty children that poverty is not
                        permanent and that the situation can change for the better when someone holds your hand.
                    </p>
                    <p><a href={PENIEL_SITE}>Visit website &rarr;</a></p>
                </div>
            </div>
            <div className={styles.bottom_section}>

            </div>
        </>
    )
}

const BeverlyWebsite = (key, website) => {
    return (
        <>
            <div className={sectionStyles.sections_intro} key={key}>
                <a
                    href={website}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div>
                        className={`${sectionStyles.image_holder} ${sectionStyles.beverly_school}`}
                        data-content={"Currently a work in progress"}
                    </div>
                </a>
                <div className={sectionStyles.image_right}>
                    <p>
                        The Beverly School of Kenya website is a project that is aimed at
                        improving customer satisfaction by providing a modern, user-friendly,
                        easily manageable and exciting new website , and therefore pushing the school
                        towards achieving its goals and objectives.
                    </p>
                    <p>
                        <i>
                            This is currently a work under development.
                        </i>
                    </p>
                </div>
            </div>
            <div className={styles.bottom_section}>

            </div>
        </>
    )
}

const BeverlyDigital = (key, website) => {
    return (
        <>
            <div className={sectionStyles.sections_intro} key={key}>
                <a
                    href={website}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div
                        className={`${sectionStyles.image_holder} ${sectionStyles.beverly_digital}`}
                        data-content={"Projects in progress"}
                    />
                </a>
                <div className={sectionStyles.image_right}>
                    <p>
                        The Beverly School of Kenya and I have been working hand in hand on
                        <strong> Digital Marketing</strong> , also called online marketing, which
                        is the promotion of brands to connect with potential customers using
                        the internet and other forms of digital communication.
                    </p>
                </div>
            </div>
            <div className={styles.bottom_section}>
                <p>
                    <i>
                        From our collaboration starting late December 2020, BSK registered a great increase
                        in the number of inquiries and admissions in January 2021. We continue to work together on
                        the best strategies to utilise to leverage the internet and other digital platforms.
                        <br/>
                        <br/>
                        The new website is as a result of these deliberations. (Work in progress)
                    </i>
                </p>
            </div>
        </>
    )
}

const JujaPreparatoryDigital = (key, website) => {
    return (
        <>
            <div className={sectionStyles.sections_intro} key={key}>
                <a
                    href={website}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div
                        className={`${sectionStyles.image_holder} ${sectionStyles.juja_prep_digital}`}
                        data-content={"Visit school website"}/>
                </a>
                <div className={sectionStyles.image_right}>
                    <p>
                        I have worked with Juja Preparatory and Senior Schools since July 2020.
                        Amidst the pandemic, I worked in several capacities, including
                        <strong> leading the Digital Marketing Team and taking lead on Brand Design </strong>process.
                        I also worked on <strong> Graphics Design </strong>.
                    </p>
                </div>
            </div>
            <div className={styles.bottom_section}>
                <p>
                    <i>
                        Under my lead, we launched the Cambridge Primary system, which was completely done online.
                        Through well-thought and planned campaigns, we pulled something that was previously
                        thought impossible. <br/>
                        We have continued to work together to date.
                    </i>
                </p>
                <p><a href={JPSS_SITE}>Visit website &rarr;</a></p>
            </div>
        </>
    )
}

const JijiKEAmbassador = (key, website) => {
    return (
        <>
            <div className={"global_column" + " " + sectionStyles.sections_intro} key={key}>
                <p>
                    I have been a valued <a href={website} target={"_blank"} rel={"noreferrer"}>Jiji KE</a> brand
                    ambassador
                    for over a year now (since July 2020).
                </p>
            </div>
        </>
    )
}

const WowziInfluencer = (key, website) => {
    return (
        <>
            <div className={sectionStyles.sections_intro} key={key}>
                <p>
                    I have worked with <a href={website} target={"_blank"} rel={"noreferrer"}>Wowzi</a> since mid-2020
                    as a social media influencer with different brands.
                    Here, I've worked with brands like <strong>Coop Bank, Safaricom PLC, Ministry of Health,
                    Toyota Kenya, Britam KE, Jumia Kenya, among more. </strong>
                </p>
            </div>
        </>
    )
}

const TundaFarmWebsite = (key, website) => {
    return (
        <div key={key}>

        </div>
    )
}

const PeboaElectricals = (key, website) => {
    return (
        <div key={key}>

        </div>
    )
}


Projects.Layout = PageLayout;