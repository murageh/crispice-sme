//@ts-nocheck
import React, {useEffect} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import FloatingParticles from "../components/global/FloatingParticles";
import BackgroundCubes from "../components/global/BackgroundCubes";
import {useRouter} from "next/router";
import BackgroundCircles from "../components/global/BackgroundCircles";
import {Header} from "../components/global/header/Header";
import useSticky from "../components/global/header/UseSticky";
import {ThemeProvider} from "../components/ThemeContext";
import {FloatingSocialMenu, WhatsappFloatingButton} from "../components/global/SocialMenu";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

export default function PageLayout({children}) {
    const router = useRouter();
    const path = router.pathname;
    const {isSticky, element} = useSticky();

    useEffect(() => {
        document.querySelectorAll(".col-3 input")
            .forEach((element) => {
                //console.log("found ", element);
                element.value = "";
            })
        document.querySelectorAll(".input-effect input")
            .forEach((element) => {
                element.addEventListener('focusout', function () {
                    //console.log("setting listeners for", element)
                    if (element.value !== "") {
                        element.classList.add("has-content");
                    } else {
                        element.classList.remove("has-content");
                    }
                })
            })
    })

    const getDate = () => {
        //1/6/2018
        let d = new Date(2021, 8, 25);
        let ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d);
        let mo = new Intl.DateTimeFormat('en', {month: 'short'}).format(d);
        let da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(d);
        return (`${da}-${mo}-${ye}`);
    }

    return (
        <ThemeProvider>
            <ToastContainer/>
            <div className={styles.container}>
                <Head>

                    {/*{!--Primary Meta Tags --}*/}
                    <title>CRISP-ICE TECHNOLOGIES | Official Website</title>
                    <meta name="title" content="CRISP-ICE TECHNOLOGIES | Official Website"/>
                    <meta name="description"
                          content="We help businesses, brands, and individuals like you, stand out from the rest. We deliver beautifully crafted websites that give you maximum conversions. Get in touch."/>

                    <meta name="revised" content={"MURAGEH, " + getDate()}/>
                    <meta name="author" content="Fedelis MURAGE" />

                    {/*{!--Open Graph / Facebook --}*/}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://crispice.netlify.app"/>
                    <meta property="og:title" content="CRISP-ICE TECHNOLOGIES | Official Website"/>
                    <meta property="og:description"
                          content="We help businesses, brands, and individuals like you, stand out from the rest. We deliver beautifully crafted websites that give you maximum conversions. Get in touch."/>
                    <meta property="og:image"
                          content="https://i.postimg.cc/Vk40XrZL/Crisp-ice-White-Laptop-Twitter-Header.png"/>

                    {/*{!--Twitter--}*/}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://crispice.netlify.app"/>
                    <meta property="twitter:title"
                          content="CRISP-ICE TECHNOLOGIES | Official Website"/>
                    <meta property="twitter:description"
                          content="We help businesses, brands, and individuals like you, stand out from the rest. We deliver beautifully crafted websites that give you maximum conversions. Get in touch."/>
                    <meta property="twitter:image"
                          content="https://i.postimg.cc/Vk40XrZL/Crisp-ice-White-Laptop-Twitter-Header.png"/>

                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Poppins"/>
                </Head>
                <main className={styles.main}>
                    <Header sticky={isSticky}/>
                    <div className={styles.main_content} ref={element}>
                        {children}
                    </div>
                </main>
                <FloatingSocialMenu footer={false}/>
                <WhatsappFloatingButton/>
                <BackgroundCubes/>
                <BackgroundCircles/>
                <div className={"black_background"}/>
                <FloatingParticles/>
            </div>
            <footer className={styles.footer}>
                <FloatingSocialMenu footer={true}/>
                <p>
                    &copy; Copyright {" "} 2021.️
                    <br/>
                    <a
                        href="/"
                    >
                        <span className={styles.logo}>
                            <img
                                src={"/svg/blue_bold_logo.svg"}
                                alt={"Logo"}
                                height={16}
                                width={72}
                            />
                          </span>
                    </a>
                </p>
            </footer>
        </ThemeProvider>
    );
}