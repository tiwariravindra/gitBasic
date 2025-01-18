import { useState } from 'react';

const Calculator = () =>{

    const [num, setNum] = useState(0);

    const [result, setResult] = useState('');

    const getResult = (v)=> {
        
        setResult(eval(result));

        

    }

    return (
        <>
        <h1>Calculator</h1>
        <input type="text" value={result}  />

        <div >
            <button onClick={() => setResult(num => num+ '1')}>1</button>
            <button onClick={() => setResult(num => num+ '2')}>2</button>
            <button onClick={() => setResult(num => num+ '3')}>3</button>
        </div>
        <div >
            <button onClick={() => setResult(num => num+ '4')}>4</button>
            <button onClick={() => setResult(num => num+ '5')}>5</button>
            <button onClick={() => setResult(num => num+ '6')}>6</button>
        </div>
        <div >
            <button onClick={() => setResult(num => num+ '7')}>7</button>
            <button onClick={() => setResult(num => num+ '8')}>8</button>
            <button onClick={() => setResult(num => num+ '9')}>9</button>
            <button onClick={() => setResult(num => num+ '0')}>0</button>
        </div>
        <div >
            <button onClick={() => setResult(num => num+ '+')}>+</button>
            <button onClick={() => setResult(num => num+ '-')}>-</button>
            <button onClick={() => setResult(num => num+ '*')}>*</button>
            <button onClick={() => setResult(num => num+ '/')}> / </button>
           
            
        </div>
        <div >
            <button onClick={ getResult }>Result</button>
            
        </div>
        
        </>
    )
}

export default Calculator;