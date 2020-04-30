import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Timer = ({
                    // destructure props
                     decrementTimerLength,
                     incrementTimerLength,
                      handleDisabled
                 }) => {
    return (
        <Container>
            <Row className='plus-minus-sign'>
                <Col sm={6}>
                    <button className='btn btn-outline-danger btn-lg' disabled={handleDisabled} onClick={decrementTimerLength}>-</button>
                </Col>
                <Col sm={6}>
                    <button className='btn btn-outline-danger btn-lg' disabled={handleDisabled} onClick={incrementTimerLength}>+</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Timer;
