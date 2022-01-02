import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Context, SettingsContext } from "../context/SettingsContextProvider";
import { InputForm } from "./SetPomodor";

interface Props {
    keycount: number;
    timer: number;
    animate: boolean;
}

interface timer {
    remainingTime: number;
}

const reaming = ({ remainingTime }: timer) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return <div className="valueTimer">{minutes + ":" + seconds}</div>;
};

export const Countdown = ({ keycount, timer, animate }: Props) => {
    const {
        pauseTimer,
        executing,
        setCurrentTime,
        toggleValueBtn,
    } = useContext<Context>(SettingsContext);

    const complet = (exe: InputForm) => {
        if (exe.active === "work") {
            setCurrentTime("short");
            pauseTimer();
            toggleValueBtn("short");
        } else {
            setCurrentTime("work");
            pauseTimer();
            toggleValueBtn("work");
        }
    };

    return (
        <CountdownCircleTimer
            key={timer}
            isPlaying={animate}
            duration={timer * 60}
            colors={[
                ["#004777", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
            ]}
            strokeWidth={15}
            size={250}
            onComplete={() => complet(executing)}
        >
            {reaming}
        </CountdownCircleTimer>
    );
};
