import React, {useEffect, useState} from "react";
import moment from "moment";
import momentDurationFormat from 'moment-duration-format';

momentDurationFormat(moment); // call plugin moment-duration

const TimeLeft = ({
    timerLength // pass props
                  }) => {
    const [timeLeft, setTimeLeft] = useState(timerLength); // define state

    // change TimeLeft component whenever Timer component is changed
    useEffect(() => {
        setTimeLeft(timerLength);
    }, [timerLength]);

    // variable to transform seconds to mm:ss
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');

    return (
        <div>
            <h1>{formattedTimeLeft}</h1>
        </div>
    )
}

export default TimeLeft;