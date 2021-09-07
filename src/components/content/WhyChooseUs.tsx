import React from "react"
import Carousel from "./work/Carousel";
import sectionStyles from "../../styles/home.sections.module.css";
import homeStyles from "../../styles/Home.module.css"
import {homePage} from "./ServicesContent";
import {useRouter} from "next/router";
import {Money} from "@material-ui/icons";
import {AppIcon} from "../global/helpers/AppIcon";

let currentPath = "";

export default function WhyChooseUs() {
    const {pathname} = useRouter();
    currentPath = pathname;

    return (
        <>
            <div className={sectionStyles.sections}>
                <h1 className={sectionStyles.sections_title}><a href={"/projects"} id={"projects"}>Why choose Us?</a></h1>
                <Cards />
            </div>
        </>
    )
}

const Cards = () => {

    return (
        <>
            <div className={"choose-us-cards"}>
                <div className={"choose-us-card affordable"}>
                    <h2>Affordable solutions</h2>
                    <AppIcon type={"money"} size={"large"} />
                    <p>
                        We're affordable. You can get started with your awesome website for as low as Kes. 15,000!
                    </p>

                </div>

                <div className={"choose-us-card available"}>
                    <h2>Always available</h2>
                    <AppIcon type={"available"} size={"large"} />
                    <p>
                        We never bail on you - we're always there for you from beginning to end. 24 hours a day.
                    </p>

                </div>

                <div className={"choose-us-card experienced"}>
                    <h2>Well-experienced staff</h2>
                    <AppIcon type={"experienced"} size={"large"} />
                    <p>
                        We're also the best in this space, the deal doesn't get sweeter than this!
                    </p>

                </div>

                <div className={"choose-us-card feedback"}>
                    <h2>Happy customers</h2>
                    <AppIcon type={"feedback"} size={"large"} />
                    <p>
                        Nothing makes us happier than seeing our customers happy. And they always are.
                    </p>

                </div>
            </div>

        </>
    )
}

