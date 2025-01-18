import { useState, useEffect, useMemo, useCallback, useRef } from "react";

const Code = () => {
    // code for useMemo
    
    const [data, setData] = useState(0);

    const extensiveCalculation = (data) => {
        console.log("extensiveCalculation was called");
        return data * 20;
    }

    const incrementVal = () => {
        setData(data + 1);
    }

    const decrementVal = () => {
        setData((pdata)=> pdata - 1);
    }

    const checkData = () => {
        console.log(data);
    }

const memoResult = useMemo( ()=> extensiveCalculation(data), [data]);
    //const memoResult =  extensiveCalculation(data);
    return (

        <>
            <h1>{memoResult}</h1>

            <button onClick={ incrementVal }>Increment</button>
            <button onClick={ decrementVal }>Decrement</button>
            <button onClick={ checkData }>check data</button>
        </>


    );
}

export default Code;