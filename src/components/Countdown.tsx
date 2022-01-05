import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Context, SettingsContext } from "../context/SettingsContextProvider";
import { InputForm } from "./SetPomodor";

interface Props {
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

export const Countdown = ({ timer, animate }: Props) => {
    const {
        pauseTimer,
        executing,
        setCurrentTime,
        toggleValueBtn,
        pomodoro,
        setpomodoro,
    } = useContext<Context>(SettingsContext);

    const aud:HTMLAudioElement = new Audio("/alarm-wood.mp3");

    const complet = (exe: InputForm) => {
        aud.play()
        if (exe.active === "work") {
            setpomodoro((prev) => prev + 1);
            if (pomodoro === 4) {
                setpomodoro(1);
                setCurrentTime("long");
                pauseTimer();
                toggleValueBtn("long");
            } else {
                setCurrentTime("short");
                pauseTimer();
                toggleValueBtn("short");
            }
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
