import React from "react";

const Timer = ({
                    // destructure props
                     decrementTimerLength,
                     incrementTimerLength,
                      handleDisabled
                 }) => {
    return (
        <div>
            <h1>Timer:</h1>
            <button disabled={handleDisabled} onClick={decrementTimerLength}>-</button>
            <button disabled={handleDisabled} onClick={incrementTimerLength}>+</button>
        </div>
    );
};

export default Timer;
