import { useState, useEffect, useLayoutEffect } from 'react';

function Test() {
  const [count, setCount] = useState(0);

  
/*
  useLayoutEffect(() => {
    console.log('useLayoutEffect: count', count);
    setCount(count + 1);
  }, []);
*/
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);
  
  
  
  
  

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default Test;