import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";

function Timer({initialTimeInSeconds = 120}) {
    const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);
    const [ticking, setTicking] = useState(false)


    useEffect(() => {
        let intervalId;
        if(ticking) {
            // console.log('start ticking')
         intervalId = setInterval(()=> {
            setTimeLeft(state => state-1);
        }, 1000)}
        return () => {
            // console.log('clear interval', intervalId)
            clearInterval(intervalId)
    }
    }, [ticking]);

    useEffect(() => {
    if(timeLeft <= 0) {
        setTicking(false);
        // setTimeLeft(initialTimeInSeconds)
    }
    },[timeLeft])

    const startOrPause = () => {
        setTicking(state => !state); //!ticking
    }

   const onReset = () => {
        setTimeLeft(initialTimeInSeconds)
        setTicking(false);
   }

   const pad = (n) => {
        return n < 10 ? `0${n}` : n;
    }


   const format = (timeInSeconds) => {
        const h = Math.floor(timeInSeconds / 3600);
        const m = Math.floor((timeInSeconds % 3600)/60);
        const s = Math.floor((timeInSeconds % 3600)%60);
        return `${pad(h)}:${pad(m)}:${pad(s)}`;
   }

    return (
        <div>
            <h1>{format(timeLeft)}</h1>
            <Button onClick={startOrPause} disabled={timeLeft <= 0} className="me-1"> {ticking ? 'pause' : 'start'} </Button>
            <Button variant="secondary"  onClick={onReset}>Reset</Button>

        </div>
    );
}

export default Timer;