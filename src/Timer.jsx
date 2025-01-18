import React, { useState, useEffect, useRef } from "react";    

const Timer = () => {
    const [timer, setTimer] = useState(10);
    const [isStop, setIsStop] = useState(false);
    const [intervalRef, setintervalRef] = useState(null);

    const handleStart = () => {
        
        console.log('handleStart');
        if (!isStop && !intervalRef) {
            const id = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 0) {
                        clearInterval(intervalRef);
                        setintervalRef(null);
                        setIsStop(true);
                        return prevTimer;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
            setintervalRef(id);
        }
    };

    const handleStop = () => {
        console.log('handleStop');
        //setIsStop(true);
        if (intervalRef) {
            clearInterval(intervalRef);
            setintervalRef(null);
        }
        
    };

    const handleReset = () => {
        console.log('handleReset');
        clearInterval(intervalRef);
        setintervalRef(null);
        setTimer(10);
        setIsStop(false);
        handleStart();
    };

    useEffect(() => {
        handleStart(); // Start the timer on mount
        return () => {
            if (intervalRef) {
                clearInterval(intervalRef); // Cleanup interval on unmount
            }
        };
    }, []);

    return (
        <>
            <h1>Timer : {timer}</h1>

            <div>
                <button onClick={handleStart} disabled={isStop && timer === 0}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
};

export default Timer;
