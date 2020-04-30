import React, {useState} from "react";
import {Toast} from "react-bootstrap";

export function BreakMessage() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
                <strong className="mr-auto">Break time!</strong>
            </Toast.Header>
            <Toast.Body>
                Now it's time to take a 5 minute break!
            </Toast.Body>
        </Toast>
    )
}