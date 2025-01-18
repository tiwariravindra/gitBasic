import { useState, useMemo } from "react";

const Memo = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    //console.log("rendering : " + count);
    console.log("rendering : " + value);
    const doExtensiveTask = (count) =>{
        console.log("I am doing Extensive Task for : " + count);
        for (let i = 0; i < 1000000000; i++) {
            count++;
        }
        return count;
    }

    const extensiveTask = useMemo(()=> {
        return doExtensiveTask(count);
    }, [count]);

    return (
        <>
            <h1>{count}</h1>
            <h1>ExtensiveTask : { extensiveTask }</h1>
            <button onClick={()=> setCount(count +1)}>Change Count Value +</button>
            <button onClick={()=> setCount(count -1)}>Change Count Value -</button>
            <button onClick={()=> setValue(value +1)}>Change Count Value -</button>
        </>
    )


};

export default Memo;