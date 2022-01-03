import React, { useContext, useEffect } from "react";
import { ButtonCall } from "./components/Button";
import { Countdown } from "./components/Countdown";
import { SetPomodor } from "./components/SetPomodor";
import { SettingsContext } from "./context/SettingsContextProvider";
import {
    BottomNavigation,
    BottomNavigationAction,
    Paper,
    Box,
    Container,
    Grid,
} from "@mui/material";
import {
    PlayCircle,
    StopCircle,
    FreeBreakfast,
    AccessTime,
    Snooze
} from "@mui/icons-material";

function App() {
    const {
        pomodoro,
        timer,
        setCurrentTime,
        settingsBtn,
        startAnimate,
        startTime,
        executing,
        updateExecute,
        pauseTimer,
        valueBtnNavigation,
        handleChangeValue
    } = useContext(SettingsContext);

    useEffect(() => {
        updateExecute(executing);
    }, [executing, startAnimate]);

    return (
        <>
            {timer !== 0 ? (
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
                        <Container maxWidth="lg">
                            <Grid
                                container
                                rowSpacing={3}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                sx={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            width: "250px",
                                        }}
                                    >
                                        <Paper elevation={6}>
                                            <BottomNavigation
                                                value={valueBtnNavigation}
                                                onChange={handleChangeValue}
                                            >
                                                <BottomNavigationAction
                                                    label="Pomodoro"
                                                    value="work"
                                                    icon={<AccessTime />}
                                                    onClick={() =>
                                                        setCurrentTime("work")
                                                    }
                                                />
                                                <BottomNavigationAction
                                                    label="Receso"
                                                    value="short"
                                                    icon={<FreeBreakfast />}
                                                    onClick={() =>
                                                        setCurrentTime("short")
                                                    }
                                                />
                                                <BottomNavigationAction
                                                    label="Descanso"
                                                    value="long"
                                                    icon={<Snooze />}
                                                    onClick={() =>
                                                        setCurrentTime("long")
                                                    }
                                                />
                                            </BottomNavigation>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Countdown
                                        timer={timer}
                                        animate={startAnimate}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {!startAnimate ? (
                                        <ButtonCall _callback={startTime}>
                                            <PlayCircle />
                                        </ButtonCall>
                                    ) : (
                                        <ButtonCall _callback={pauseTimer}>
                                            <StopCircle />
                                        </ButtonCall>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonCall _callback={settingsBtn}>
                                        Configurar
                                    </ButtonCall>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </>
            ) : (
                <SetPomodor />
            )}
        </>
    );
}

export default App;
