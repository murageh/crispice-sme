import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "../ThemeContext";

const FloatingParticles = () => {
    const { theme } = useTheme();
    const dark = theme === "dark";

    const darkThemeColors = ["#7f7f7f", "#00407f", "#7d4000"];
    const lightThemeColors = ["#ffffff20", "#0080ff20", "#FA800020"];

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            className="background"
            init={particlesInit}
            options={{
                particles: {
                    number: {
                        value: 80,
                        density: { enable: true, area: 1000 }
                    },
                    color: { value: dark ? darkThemeColors : lightThemeColors },
                    opacity: {
                        value: 0.5,
                        animation: { enable: true, speed: 1 }
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: { enable: true, speed: 3 }
                    },
                    links: { enable: false },
                    move: { enable: true, speed: 0.2 }
                },
                responsive: [
                    {
                        maxWidth: 800,
                        options: {
                            particles: {
                                number: { value: 40 }
                            }
                        }
                    }
                ]
            }}
        />
    );
};

export default FloatingParticles;
