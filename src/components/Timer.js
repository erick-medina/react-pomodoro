import React from "react";
import moment from "moment";

const Timer = ({
                    // destructure props
                     timerLength,
                     decrementTimerLength,
                     incrementTimerLength,
                 }) => {
    // convert seconds to minutes through the moment library
    const timerLengthInMinutes = moment
        .duration(timerLength, "s")
        .minutes();

    return (
        <div>
            <h1>Timer:</h1>
            <h2>{timerLengthInMinutes}</h2>
            <button onClick={decrementTimerLength}>-</button>
            <button onClick={incrementTimerLength}>+</button>
        </div>
    );
};

export default Timer;
