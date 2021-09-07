import React from "react";
import {AppIcon} from "./helpers/AppIcon";

export const WhatsappFloatingButton = () => {

    return (
        <div className={"whatsapp-button"}>
            <a href={"https://wa.me/254789720031"} target={"_blank"}>
                <img src="/images/whatsapp2.png" alt="Whatsapp me"/>
            </a>
        </div>
    )
}

export const FloatingSocialMenu = ({footer}) => {

    return (
        <div className={`floating-social-menu ${footer ? 'footer_social' : ''}`}>
            <a
                href={"https://www.facebook.com/CrispIceKE"}
                target={"_blank"}
                rel="noreferrer"
            >
               <AppIcon type={"facebook"} size={"large"} />
            </a>
            <a
                href={"https://twitter.com/crispiceke"}
                target={"_blank"}
                rel="noreferrer"
            >
                <AppIcon type={"twitter"} size={"large"}/>
            </a>
            <a
                href={"https://www.instagram.com/crispice_ke/"}
                target={"_blank"}
                rel="noreferrer"
            >
                <AppIcon type={"instagram"} size={"large"}/>
            </a>
            {/*<a*/}
            {/*    href={"https://linkedin.com/in/fmurageh/"}*/}
            {/*    target={"_blank"}*/}
            {/*    rel="noreferrer"*/}
            {/*>*/}
            {/*    <AppIcon type={"linkedin"} size={"large"}/>*/}
            {/*</a>*/}
        </div>
    )
}