import { FormEvent, useContext, useState } from "react";
import { Context, SettingsContext } from "../context/SettingsContextProvider";
import { Box, Grid, Container } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { ButtonCall } from "./Button";

export interface InputForm {
    work: number;
    short: number;
    active: string;
}

export const SetPomodor = () => {
    const { updateExecute, toggleValueBtn, pauseTimer } =
        useContext<Context>(SettingsContext);

    const [newTimer, setnewTimer] = useState<InputForm>({
        work: 25,
        short: 5,
        active: "work",
    });

    const handleSubmit = (e: FormEvent) => {
        updateExecute(newTimer);
        toggleValueBtn("work");
        pauseTimer();
    };

    const handlecontadorWorkup = () =>
        setnewTimer({ ...newTimer, work: newTimer.work + 1 });

    const handlecontadorWorkdown = () => {
        newTimer.work === 1
            ? setnewTimer({ ...newTimer, work: 1 })
            : setnewTimer({ ...newTimer, work: newTimer.work - 1 });
    };

    const handlecontadorShortup = () =>
        setnewTimer({ ...newTimer, short: newTimer.short + 1 });

    const handlecontadorShortdown = () => {
        newTimer.short === 1
            ? setnewTimer({ ...newTimer, short: 1 })
            : setnewTimer({ ...newTimer, short: newTimer.short - 1 });
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Container maxWidth="lg" style={{ width: "600px" }}>
                    <Grid
                        container
                        rowSpacing={3}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12}>
                            <h2>Work</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonCall _callback={handlecontadorWorkdown}>
                                <ArrowDownward />
                            </ButtonCall>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{newTimer.work}</h3>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonCall _callback={handlecontadorWorkup}>
                                <ArrowUpward />
                            </ButtonCall>
                        </Grid>
                        <Grid item xs={12}>
                            <h2>Short</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonCall _callback={handlecontadorShortdown}>
                                <ArrowDownward />
                            </ButtonCall>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{newTimer.short}</h3>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonCall _callback={handlecontadorShortup}>
                                <ArrowUpward />
                            </ButtonCall>
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonCall _callback={handleSubmit}>
                                Set Timer
                            </ButtonCall>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
