import React from "react";
import sectionStyles from "../../styles/home.sections.module.css";
import {useRouter} from "next/router";

let currentPath = "";
export const servicePage = "/services";
export const homePage = "/";

export const ServicesContent = () => {
    const {pathname} = useRouter();
    currentPath = pathname;

    return (
        <>
            <div className={sectionStyles.sections}>
                <h1 className={sectionStyles.sections_title}><a href={"/services"} id={"services"}>Our Services</a></h1>
                <div className={sectionStyles.sections_intro}>
                    <a
                        href={"/services"}
                        className={sectionStyles.image_holder} data-content={"View services"}
                    />
                    <div className={sectionStyles.image_right}>
                        <p>
                            The Crisp-ice team works tirelessly to bring you top-notch solutions that
                            suit your custom needs. We design everything with you in mind.
                        </p>
                        <p>
                            While many developers provide you with stock solutions, we
                            deliver tailor-made systems that fit right into your space.
                        </p>
                    </div>
                </div>
                <div>
                    <div className={sectionStyles.service_tiles}>
                        <WebDesignService/>
                        <MobileDevService/>
                        <DigitalMarketingService/>
                        <DigitalConsultingService/>
                        <GraphicDesignService/>
                        <RetailingService/>
                    </div>
                </div>
            </div>
        </>
    );
};


const WebDesignService = () => {
    return (
        <>
            <div className={sectionStyles.service_tile}>
                <h3 className={sectionStyles.section_title}><a href={"/services#web"}>Web Development</a></h3>
                <div className={sectionStyles.section_card}>
                    <a
                        href={"/services#web"}
                        className={sectionStyles.image_holder + " " + sectionStyles.web} data-content={"Web design"}
                    />
                    <div className={sectionStyles.image_right}>
                        <p>
                            Our web design and development package enables you to:
                            <ul>
                                <li>Stay ahead of customer satisfaction trends.</li>
                                <li>Feel a new experience.</li>
                                <li>Realize the full benefits of modern marketing on the digital space.</li>
                                <a href={currentPath === homePage ? "#contact-name" : "/contact"}>Request for quotation &rarr;</a>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const MobileDevService = () => {
    return (
        <>
            <div className={sectionStyles.service_tile}>
                <h3 className={sectionStyles.section_title}><a href={"/services#mobile-dev"}>Mobile Apps Development</a>
                </h3>
                <div className={sectionStyles.section_card}>
                    <a
                        href={"/services#mobile-dev"}
                        className={sectionStyles.image_holder + " " + sectionStyles.mobile_dev}
                        data-content={"Web design"}
                    />
                    <div className={sectionStyles.image_right}>
                        <p>
                            We are the right people to actualize your app ideas and bring them to life.
                            <ul>
                                <li>We deliver apps right to your very exact requirements.</li>
                                <li>We ensure maximized productivity in every production.</li>
                                <a href={currentPath === homePage ? "#contact-name" : "/contact"}>Tell us your app idea &rarr;</a>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const DigitalMarketingService = () => {
    return (
        <>
            <div className={sectionStyles.service_tile}>
                <h3 className={sectionStyles.section_title}><a href={"/services#digital-marketing"}>Digital
                    Marketing</a></h3>
                <div className={sectionStyles.section_card}>
                    <a
                        href={"/services#digital-marketing"}
                        className={sectionStyles.image_holder + " " + sectionStyles.digital_marketing}
                        data-content={"Digital Marketing"}
                    />
                    <div className={sectionStyles.image_right}>
                        <p>
                            <b>Quick tip:</b> Both your customers AND competitors are online.
                            <ul>
                                <li>We offer digital marketing services for brands, companies and individuals.</li>
                                <li>We plan, design and execute meticulous campaigns to ensure your
                                    brand gains the most traction on the digital space.
                                </li>
                                <li>Get in touch with us to discuss the right solution for you.</li>
                                <a href={currentPath === homePage ? "#contact-name" : "/contact"}>Let's discuss. &rarr;</a>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const DigitalConsultingService = () => {
    return (
        <>
            <div className={sectionStyles.service_tile}>
                <h3 className={sectionStyles.section_title}><a href={"/services#mobile-dev"}>Digital Strategy
                    Consulting</a></h3>
                <div className={sectionStyles.section_card}>
                    <a
                        href={"/services#mobile-dev"}
                        className={sectionStyles.image_holder + " " + sectionStyles.digital_strategy}
                        data-content={"Digital Strategy Consulting"}
                    />
                    <div className={sectionStyles.image_right}>
                        <p>
                            <i>
                                “Planning is bringing the future into the present so that you can
                                do something about it now.”
                            </i>
                        </p>
                        <p>
                            We offer design and consultation services on digital strategies.
                            <br/>
                            We would be glad to help your brand stand out from the rest.
                            <ul>
                                <a href={currentPath === homePage ? "#contact-name" : "/contact"}>Get in touch &rarr;</a>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const RetailingService = () => {
    return (
        <>
            <div className={sectionStyles.service_tile}>
                <h3 className={sectionStyles.section_title}><a href={"/services#mobile-dev"}>Retail Services</a></h3>
                <div className={sectionStyles.section_card}>
                    <a
                        href={"/services#mobile-dev"}
                        className={sectionStyles.image_holder + " " + sectionStyles.retail_service}
                        data-content={"Retail Services"}
                    />
                    <div className={sectionStyles.image_right}>
                        <p>
                            We also deal in all electronics, parts and accessories, including:
                            <ul>
                            <li>Screens, wireless keyboards... mice, yada yada...</li>
                            <li>Broken screens..... &#128148;</li>
                            <p>We got you on that and many more.</p>
                            <li>We deal in all types of phone and computer accessories.</li>
                            <a href={currentPath === homePage ? "#contact-name" : "/contact"}>Shoot us a message to get a quote. &rarr;</a>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const GraphicDesignService = () => {
    return (
        <>
            <div className={sectionStyles.service_tile}>
                <h3 className={sectionStyles.section_title}><a href={"/services#mobile-dev"}>Graphic Design</a></h3>
                <div className={sectionStyles.section_card}>
                    <a
                        href={"/services#mobile-dev"}
                        className={sectionStyles.image_holder + " " + sectionStyles.graphic_design}
                        data-content={"Graphic Design"}
                    />
                    <div className={sectionStyles.image_right}>
                        <p>
                            <ul>
                                <p>We design: </p>
                                <li>Logos, posters, flyers, pamphlets, and anything graphic.</li>
                                <li>We are a one-stop shop for all graphic solutions.</li>
                                <li>You just might be left wondering why you didn't find us sooner. &#128540;</li>
                                <a href={currentPath === homePage ? "#contact-name" : "/contact"}>Shoot us a message &rarr;</a>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
