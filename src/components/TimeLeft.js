import React from "react";
import moment from "moment";
import momentDurationFormat from 'moment-duration-format';

momentDurationFormat(moment); // call plugin moment-duration

const TimeLeft = ({
    startStopButtonLabel, timerLabel, handleStartandStopButton, timeLeft // pass props
                  }) => {

    // variable to transform seconds to mm:ss
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false}); // trim to add 00 after decreasing 1 minute

    return (
        <div>
            <h1>{timerLabel}</h1>
            <h1>{formattedTimeLeft}</h1>
            <button onClick={handleStartandStopButton}>{startStopButtonLabel}</button>
        </div>
    )
}

export default TimeLeft;