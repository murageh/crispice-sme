import React from "react";
import Particles from "react-particles-js";
import {useTheme} from "../ThemeContext";

const FloatingParticles = () => {
  const { theme, setTheme } = useTheme();
  const dark = (theme ==="dark");

  const darkThemeColors = ["#7f7f7f", "#00407f", "#7d4000"];
  const lightThemeColors = ["#fff", "#0080ff20", "#FA800020"];

  return (
    <Particles className={"background"}
               params={{
                 particles: {
                   number: {
                     value: 150,
                     density: {
                       enable: true,
                       value_area: 1000
                     }
                   },
                   color: {
                     value: dark ? darkThemeColors : lightThemeColors
                   },
                   opacity: {
                     value: 0.5,
                     anim: {
                       enable: true
                     }
                   },
                   size: {
                     value: 2,
                     random: true,
                     anim: {
                       enable: true,
                       speed: 3
                     }
                   },
                   line_linked: {
                     enable: false,
                   },
                   move: {
                     speed: 0.2
                   }
                 },
                 responsive: [
                   {
                     maxWidth: 800,
                     options: {
                       particles: {
                         number: {
                           value: 100,
                           density: {
                             enable: true,
                             value_area: 1000
                           }
                         },
                         color: {
                           value: dark ? darkThemeColors : lightThemeColors
                         },
                         opacity: {
                           value: 0.5,
                           anim: {
                             enable: true
                           }
                         },
                         size: {
                           value: 2,
                           random: true,
                           anim: {
                             enable: true,
                             speed: 1.5
                           }
                         },
                         line_linked: {
                           enable: false
                         },
                         move: {
                           speed: 0.2
                         }
                       }
                     }
                   }
                 ]
               }}
    />
  );
};

export default FloatingParticles;

