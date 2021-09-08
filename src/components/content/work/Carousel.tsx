import React, {CSSProperties, useEffect, useState} from "react";
import {Carousel} from "react-responsive-carousel";
import {CarouselContent} from "./WorkContent"
import styles from "../../../styles/work.section.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Card {
    title: string,
    description: string,
    image: string,
    path: string
}

const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: '30px',
    height: '30px',
    fontSize: '2rem',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    right: '15px',
    border: '1px solid var(--nav-color)',
    borderRadius: '5px',
    color: 'var(--nav-color)',
    background: 'var(--background-color)',
}


const px1368 = "(max-width: 1368px)";
const px800 = "(max-width: 800px)";
const px648 = "(max-width: 648px)";
const px468 = "(max-width: 468px)";

const useMediaQuery = (query) => {
    if (typeof window !== "undefined") {
        const mediaMatch = window.matchMedia(query);
        const [matches, setMatches] = useState(mediaMatch.matches);

        useEffect(() => {
            const handler = e => setMatches(e.matches);
            mediaMatch.addListener(handler);
            return () => mediaMatch.removeListener(handler);
        });
        return matches;
    }
};

const useMediaQueryWithHook = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaMatch = window.matchMedia(query);
        setMatches(mediaMatch.matches);

        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        //return () => mediaMatch.removeListener(handler);
    })
    return matches;
};

const useCarouselWidth = () => {
    const [matches, setMatches] = useState(100);

    useEffect(() => {
        if (window.matchMedia(px468).matches){
            setMatches(100);
        }else if (window.matchMedia(px648).matches){
            setMatches(100);
        }else if (window.matchMedia(px800).matches){
            setMatches(50);
        }else if (window.matchMedia(px1368).matches){
            setMatches(50);
        }else {
            setMatches(33.33);
        }
    })
    return matches;
};

const WorkCarousel = () => {

    return (
        <div className={styles.section}>
            <Carousel
                key={"carousel"}
                infiniteLoop
                centerMode
                centerSlidePercentage=
                    {
                        useCarouselWidth()
                    }
                autoPlay={false}
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                transitionTime={500}
                swipeScrollTolerance={5}
                useKeyboardArrows={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, left: 15}}>
                            &#10502;
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, right: 15}}>
                            &#10503;
                        </button>
                    )
                }
                swipeable
            >
                {CarouselContent.map((item, index) => (
                    <div className={styles.parent} key={index}>
                        <div className={styles.card}
                             style={{
                                 backgroundImage: `url("/images/${item.image}")`,
                             }}
                        >
                            <div className={styles.label}>
                                <p>
                                    {item.title}
                                    <br/>
                                    {item.description}
                                </p>

                                <p className={styles.more}>
                                    <a href={`/projects${item.path}`}>View Project</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default WorkCarousel;