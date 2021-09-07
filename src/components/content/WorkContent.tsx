import React from "react"
import Carousel from "./work/Carousel";
import sectionStyles from "../../styles/home.sections.module.css";
import homeStyles from "../../styles/Home.module.css"

export default function WorkContent() {

    return (
        <>
            <div className={sectionStyles.sections}>
                <h1 className={sectionStyles.sections_title}><a href={"/projects"} id={"projects"}>Success stories</a></h1>
                <p className={homeStyles.description}>
                    Here are some previous projects.
                </p>
                <Carousel/>
            </div>
        </>
    )
}


