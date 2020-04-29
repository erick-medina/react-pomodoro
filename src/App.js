import React, {useState} from 'react';
import './App.css';
import Session from "./components/Session";

function App() {
    const [sessionLength, setSessionLength] = useState(60 * 20); // assign initial state to be 300 seconds which represent 5 minutes

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60;
        // avoid going down below 0
        if (newSessionLength < 0) {
            setSessionLength(0);
        } else {
            setSessionLength(sessionLength - 60);
        }
    };

    const incrementSessionLength = () => {
        setSessionLength(sessionLength + 60);
    };

    return (
    <div className="App">
        <Session
            // pass these variables from App component to Session
            sessionLength={sessionLength}
            decrementSessionLength={decrementSessionLength}
            incrementSessionLength={incrementSessionLength}
        />
    </div>
  );
}

export default App;
