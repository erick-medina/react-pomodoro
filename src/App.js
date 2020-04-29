import React, {useState} from 'react';
import './App.css';
import Timer from "./components/Timer";
import TimeLeft from "./components/TimeLeft";

function App() {
    const [timerLength, setTimerLength] = useState(60 * 20); // assign initial state to be 300 seconds which represent 5 minutes

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

    return (
    <div className="App">
        <TimeLeft timerLength={timerLength} />
        <Timer
            // pass these variables from App component to Timer
            timerLength={timerLength}
            decrementTimerLength={decrementTimerLength}
            incrementTimerLength={incrementTimerLength}
        />
    </div>
  );
}

export default App;
