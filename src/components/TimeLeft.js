import React from "react";
import moment from "moment";
import momentDurationFormat from 'moment-duration-format';
import { Container, Row, Col } from 'react-bootstrap';

momentDurationFormat(moment); // call plugin moment-duration

const TimeLeft = ({
    startStopButtonLabel, timerLabel, handleStartandStopButton, timeLeft // pass props
                  }) => {

    // variable to transform seconds to mm:ss
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false}); // trim to add 00 after decreasing 1 minute

    return (
        <Container>
            <Row className='pt-4 pomodoro-section'>
                <Col>
                    <h1 className='pomodoro-title'>Pomodoro Timer</h1>
                </Col>
                
            </Row>
            <Row>
                <h1>{timerLabel}</h1>
            </Row>
            <Row>
                <Col>
                    <h1 className='time-displayed'>{formattedTimeLeft}</h1>
                    <button className='btn btn-info btn-lg' onClick={handleStartandStopButton}>{startStopButtonLabel}</button>
                </Col>
            </Row>
        </Container>
    )
}

export default TimeLeft;