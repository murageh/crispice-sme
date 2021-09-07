import React from "react";

const ISSERVER = typeof window === "undefined";

const themeColours = {
    light: {
        color: "#121212",
        backgroundColor: "#fafafa",
        scrollBarThumb: "0080ff",
        scrollBarTrack: "transparent",
        fixedBackground: "transparent",
        lightGradient: "linear-gradient(125deg, #ECFCFF25 0%, #ECFCFF25 40%, #B2FCFF25 calc(40% + 1px), #B2FCFF20 60%, #5EDFFF10 calc(60% + 1px), #5EDFFF10 72%, #3E64FF05 calc(72% + 1px), #3E64FF05 100%)",
        darkBackground: "transparent",
        circleBackground: "#0080ff15",
        orangeBorder: "#ff8000",
        normalBlue: "blue",
        myBlue: "#0080ff",
        buttonBorder: "#eaeaea",
        navBackground: "#fafafaee",
        navBoxShadow: "#ccc",
        navColor: "#0080ff",
        navColorActiveLink: "#0080ff",
        homeTitleColor: "#0080ff",
        homeDescriptionColor: "#121212",
        homeDescriptionCodeColor: "darkcyan",
        homeCallToActionBackground: "#0080ff",
        homeCallToActionColor: "white",
        homeCallToActionHoverBackground: "#ff8000",
        homeCallToActionHoverColor: "white",
        sectionCardBackground: "#fafafa77",
        sectionCardTitleColor: "#0070f3",
        sectionCardTextColor: "#101010",

        placeHolderColor: "gray",
        imageBackgroundBlendMode: "normal",
        carouselBackground: "#e5e5e5aa",
        carouselBackgroundHover: "#f5f5f50",
        carouselLabelColor: "#121212",
        carouselLabelBackground: "#fafafa90",
    },
    dark: {
        color: "#fafafa",
        backgroundColor: "#3f3f3f",
        scrollBarThumb: "#00407f",
        scrollBarTrack: "black",
        fixedBackground: "#121212",
        darkBackground: "linear-gradient(125deg, transparent 0%, transparent 40%, transparent calc(40% + 1px), transparent 60%, #5EDFFF05 calc(60% + 1px), #5EDFFF08 72%,  #3E64FF08 calc(72% + 1px), #3E64FF10 100%)",
        lightGradient: "transparent",
        circleBackground: "#0080ff08",
        orangeBorder: "#ff8000",
        normalBlue: "blue",
        myBlue: "#0080ff",
        buttonBorder: "#757575",
        navBackground: "#121212",
        navBoxShadow: "#121212",
        navColor: "#7fbfff",
        navColorActiveLink: "#79b7ff",
        homeTitleColor: "#79b7ff",
        homeDescriptionColor: "#fcfcfc",
        homeDescriptionCodeColor: "#a2ffff",
        homeCallToActionBackground: "#00407f",
        homeCallToActionColor: "#fcfcfc",
        homeCallToActionHoverBackground: "#ff8000",
        homeCallToActionHoverColor: "white",
        sectionCardBackground: "#101010aa",
        sectionCardTitleColor: "#79b7ff",
        sectionCardTextColor: "#fcfcfc",

        placeHolderColor: "#cacaca",
        imageBackgroundBlendMode: "darken",
        carouselBackground: "#101010aa",
        carouselBackgroundHover: "#10101050",
        carouselLabelColor: "#fafafa",
        carouselLabelBackground: "#10101077",
    }
};

type ThemeName = "light" | "dark";
type ThemeContextType = {
    theme: ThemeName;
    setTheme: (name: ThemeName) => void;
};
const ThemeContext = React.createContext<ThemeContextType>(undefined!);

type Props = {
    children: React.ReactNode;
};
export const ThemeProvider = ({children}: Props) => {
    const [themeName, setThemeName] = React.useState<ThemeName>("light");
    const prefersDarkTheme = !ISSERVER ? localStorage.getItem("theme") === "dark" : false;

    React.useEffect(() => {
        const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(darkOS && prefersDarkTheme ? "dark" : "light");
    }, []);

    const setTheme = (name: ThemeName) => {
        document.body.style.setProperty("--color", themeColours[name].color);
        document.body.style.setProperty(
            "--background-color",
            themeColours[name].backgroundColor
        );
        document.body.style.setProperty(
            "--scrollbar-thumb",
            themeColours[name].scrollBarThumb
        );
        document.body.style.setProperty(
            "--scrollbar-track",
            themeColours[name].scrollBarTrack
        );
        document.body.style.setProperty(
            "--fixed-background",
            themeColours[name].fixedBackground
        );
        document.body.style.setProperty(
            "--light-gradient",
            themeColours[name].lightGradient
        );
        document.body.style.setProperty(
            "--dark-background",
            themeColours[name].darkBackground
        );
        document.body.style.setProperty(
            "--circle-background",
            themeColours[name].circleBackground
        );
        document.body.style.setProperty(
            "--orange-border",
            themeColours[name].orangeBorder
        );
        document.body.style.setProperty(
            "--normal-blue",
            themeColours[name].normalBlue
        );
        document.body.style.setProperty(
            "--my-blue",
            themeColours[name].myBlue
        );
        document.body.style.setProperty(
            "--button-border",
            themeColours[name].buttonBorder
        );
        document.body.style.setProperty(
            "--nav-background",
            themeColours[name].navBackground
        );
        document.body.style.setProperty(
            "--nav-box-shadow",
            themeColours[name].navBoxShadow
        );
        document.body.style.setProperty(
            "--nav-color",
            themeColours[name].navColor
        );
        document.body.style.setProperty(
            "--nav-color-active-link",
            themeColours[name].navColorActiveLink
        );
        document.body.style.setProperty(
            "--home-title-color",
            themeColours[name].homeTitleColor
        );
        document.body.style.setProperty(
            "--home-description-color",
            themeColours[name].homeDescriptionColor
        );
        document.body.style.setProperty(
            "--home-description-code-color",
            themeColours[name].homeDescriptionCodeColor
        );
        document.body.style.setProperty(
            "--home-call-to-action-background",
            themeColours[name].homeCallToActionBackground
        );
        document.body.style.setProperty(
            "--home-call-to-action-color",
            themeColours[name].homeCallToActionColor
        );
        document.body.style.setProperty(
            "--home-call-to-action-hover-background",
            themeColours[name].homeCallToActionHoverBackground
        );
        document.body.style.setProperty(
            "--home-call-to-action-hover-color",
            themeColours[name].homeCallToActionHoverColor
        );
        document.body.style.setProperty(
            "--section-card-background",
            themeColours[name].sectionCardBackground
        );
        document.body.style.setProperty(
            "--section-card-background",
            themeColours[name].sectionCardBackground
        );
        document.body.style.setProperty(
            "--image-blend-mode",
            themeColours[name].imageBackgroundBlendMode
        );
        document.body.style.setProperty(
            "--section-card-text-color",
            themeColours[name].sectionCardTextColor
        );
        document.body.style.setProperty(
            "--carousel-background",
            themeColours[name].carouselBackground
        );
        document.body.style.setProperty(
            "--carousel-background-hover",
            themeColours[name].carouselBackgroundHover
        );
        document.body.style.setProperty(
            "--carousel-label-color",
            themeColours[name].carouselLabelColor
        );
        document.body.style.setProperty(
            "--carousel-label-background",
            themeColours[name].carouselLabelBackground
        );
        document.body.style.setProperty(
            "--placeholder-color",
            themeColours[name].placeHolderColor
        );

        setThemeName(name);
        if (!ISSERVER) localStorage.setItem("theme", name);
    };
    return (
        <ThemeContext.Provider value={{theme: themeName, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
