import React, { createContext, useState } from "react";
import { InputForm } from "../components/SetPomodor";

interface Props {
    children: JSX.Element;
}

export interface Context {
    updateExecute: (newTimer: InputForm) => void;
    pomodoro: number;
    setpomodoro: React.Dispatch<React.SetStateAction<number>>
    timer: number;
    executing: InputForm;
    startAnimate: boolean;
    startTime: () => void;
    pauseTimer: () => void;
    settingsBtn: () => void;
    setCurrentTime: (active_state: string) => void;
    stopAimate: () => void;
    valueBtnNavigation: string;
    handleChangeValue: (event: React.SyntheticEvent, newValue: string) => void;
    toggleValueBtn: (value: string) => void;
}

// @ts-ignore
export const SettingsContext = createContext<Context>();

export const SettingsContextProvider = (props: Props) => {
    const [pomodoro, setpomodoro] = useState(1);
    const [timer, settimer] = useState(0);
    const [executing, setexecuting] = useState({} as InputForm);
    const [startAnimate, setstartAnimate] = useState(false);
    const [valueBtnNavigation, setValueBtnNavigation] = useState("work");

    const handleChangeValue = (
        event: React.SyntheticEvent,
        newValue: string
    ) => {
        setValueBtnNavigation(newValue);
    };

    const toggleValueBtn = (value: string) => {
        setValueBtnNavigation(value);
    };

    function setCurrentTime(active_state: string) {
        updateExecute({
            ...executing,
            active: active_state,
        });

        settimertime(executing);
    }

    function startTime() {
        setstartAnimate(true);
    }

    function pauseTimer() {
        setstartAnimate(false);
    }

    const settingsBtn = () => {
        setexecuting({} as InputForm);
        settimer(0);
    };

    const updateExecute = (updateSettings: InputForm) => {
        setexecuting(updateSettings);
        settimertime(updateSettings);
    };

    const settimertime = (evaluate: InputForm) => {
        switch (evaluate.active) {
            case "work":
                settimer(evaluate.work);
                break;
            case "short":
                settimer(evaluate.short);
                break;
            case "long":
                settimer(evaluate.long);
                break;
            default:
                settimer(0);
                break;
        }
    };

    function stopAimate() {
        setstartAnimate(false);
    }

    return (
        <SettingsContext.Provider
            value={{
                pomodoro,
                setpomodoro,
                timer,
                executing,
                startAnimate,
                updateExecute,
                startTime,
                pauseTimer,
                settingsBtn,
                setCurrentTime,
                stopAimate,
                valueBtnNavigation,
                handleChangeValue,
                toggleValueBtn
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    );
};
