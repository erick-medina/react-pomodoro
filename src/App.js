import React, {useEffect, useState} from 'react';
import './App.css';
import Timer from "./components/Timer";
import TimeLeft from "./components/TimeLeft";

function App() {
    const [timerLength, setTimerLength] = useState(60 * 20); // assign initial state to be 300 seconds which represent 5 minutes
    const [intervalId, setIntervalId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(timerLength); // define state

    // change TimeLeft component whenever Timer component is changed
    useEffect(() => {
        setTimeLeft(timerLength);
    }, [timerLength]);

    const decrementTimerLength = () => {
        const newTimerLength = timerLength - 60;
        // avoid going down below 0
        if (newTimerLength < 0) {
            setTimerLength(0);
        } else {
            setTimerLength(timerLength - 60);
        }
    };

    const incrementTimerLength = () => {
        setTimerLength(timerLength + 60);
    };

    const isStarted = intervalId != null;

    const handleStartandStopButton = () => {
        if (isStarted) {
            // if started mode
            // stop the timer using clearInterval
            clearInterval(intervalId); // to stop the function from running and set to null by 'set Interval'
            setIntervalId(null);
        } else {
            // If stopped mode:
            // use setInterval to decrement TimeLeft by one every second (1000 milliseconds)
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1; // get the previous state and decrement it by one
                    if (newTimeLeft >= 0) {
                        return prevTimeLeft - 1;
                    }
                    return prevTimeLeft;
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    const handleResetButton = () => {
        // clear timeout interval
        clearInterval(intervalId);
        // set interval Id to null
        setIntervalId(null);
        // reset Timer
        setTimeLeft(60 * 25);
    };

    return (
    <div className="App">
        <Timer
            // pass these variables from App component to Timer
            timerLength={timerLength}
            decrementTimerLength={decrementTimerLength}
            incrementTimerLength={incrementTimerLength}
        />
        <TimeLeft timerLength={timerLength}
                  handleStartandStopButton={handleStartandStopButton}
                  startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
                  timeLeft={timeLeft}
        />
        <button onClick={handleResetButton}>Reset</button>
    </div>
  );
}

export default App;
