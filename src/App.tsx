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
    Snooze,
} from "@mui/icons-material";
import { indigo } from "@mui/material/colors";

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
        handleChangeValue,
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
                                rowSpacing={5}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                className="container-grid"
                                columns={12}
                            >
                                <Grid item xs={12} sm={6}>
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
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    className="countClock"
                                >
                                    <Countdown
                                        timer={timer}
                                        animate={startAnimate}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} className="btn-order">
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
                                <Grid item xs={12} sm={6}>
                                    <ButtonCall _callback={settingsBtn}>
                                        Configurar
                                    </ButtonCall>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    style={{ order: 1, color: indigo[500] }}
                                >
                                    {/* <h4>Pomodoro {pomodoro} de 4 </h4> */}
                                    <Box
                                        component="span"
                                        sx={{ p: 2, border: "1px dashed grey" }}
                                    >
                                        Pomodoro {pomodoro} de 4
                                    </Box>
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
