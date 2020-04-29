import React from "react";
import moment from "moment";

const Session = ({
                    // destructure props
                     sessionLength,
                     decrementSessionLength,
                     incrementSessionLength,
                 }) => {
    const sessionLengthInMinutes = moment
        .duration(sessionLength, "s")
        .minutes();

    return (
        <div>
            <h1>Session:</h1>
            <h2>{sessionLengthInMinutes}</h2>
            <button onClick={decrementSessionLength}>-</button>
            <button onClick={incrementSessionLength}>+</button>
        </div>
    );
};

export default Session;
