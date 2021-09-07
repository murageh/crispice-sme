import React, {useState} from "react";
import {AppIcon} from "../helpers/AppIcon";
import styles from "../../../styles/Home.module.css";
import {useRouter} from "next/router";
import {useTheme} from "../../ThemeContext";

export const Header = ({sticky}) => {
    const [click, setClick] = useState(false);
    const {theme, setTheme} = useTheme();

    const handleClick = () => {
        setClick(!click);
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    };

    const path = useRouter().pathname;

    return (
        <>
            <div
                className={`${styles.nav_container} 
        ${sticky ? styles.nav_sticky : ""} 
        ${click ? styles.nav_active : ''} 
        `}
            >
                <nav className={styles.nav}>
                    <a href={"/"} style={{display: "flex"}}>
                        <img
                            // src={theme === "dark" ? "/svg/dark_normal_logo.svg" : "/svg/blue_normal_logo.svg"}
                            src={theme === "dark" ? "/crispice_logo_2_white.png" : "/crispice_logo_2.png"}
                            className={styles.nav_logo}
                            alt={"Logo"}
                        />
                    </a>

                    <ul>
                        {/*{path !== "/" ? <li><a href="/">Home</a></li> : ""}*/}
                        <li><a href={path !== "/" ? "/" : "#"}  style={path === '/' ? {color: "var(--color)", fontWeight: "bold"} : {}}>Home</a></li>
                        {/*<li><a href="/about" style={path === '/about' ? {color: "var(--color)"} : {}}>About</a></li>*/}
                        <li><a href="/services"  style={path === '/services' ? {color: "var(--color)", fontWeight: "bold"} : {}}>Services</a></li>
                        {/*<li><a href="/projects"  style={path === '/projects' ? {color: "var(--color)"} : {}}>Projects</a></li>*/}
                        <li><a href="/contact"  style={path === '/contact' ? {color: "var(--color)", fontWeight: "bold"} : {}}>Contact</a></li>
                    </ul>

                    <span className={styles.theme_toggle}
                          onClick={toggleTheme}
                    >
                        {theme === "dark" ? (
                            "Light mode"
                        ) : (
                            "Dark mode"
                        )}
                    </span>

                    <span className={`${styles.mobile_menu_trigger}`}
                          onClick={handleClick}>
                      {click ? (
                          <AppIcon type={"close"} size={"large"}/>
                      ) : (
                          <AppIcon type={"menu"} size={"large"}/>
                      )}
                  </span>
                </nav>
            </div>
        </>
    );
};