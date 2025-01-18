import { useState } from "react";

const Append = () => {
    const [data, setData] = useState([]);

    const addData = (str) => {
        console.log(str);

        if(data.includes(str)){
            // remove the key so that it will be added to the start
            setData((data)=> data.filter((val)=> val !==(str)));
            setData((data) =>[str, ...data]);
        }else{
            setData((data) =>[...data, str]);
        }
        

        
    };

    return (
        <>
            <h1>Append</h1>
            <div>
                <button onClick={()=> addData('A')}>A</button>
                <button onClick={()=> addData('B')}>B</button>
                <button onClick={()=> addData('C')}>C</button>
                <button onClick={()=> addData('D')}>D</button>
            </div>
            <div>
                { 
                data.map((val, indx)=>
                     {
                        if (indx === data.length - 1) {
                            // this is the last element
                            return <span>{val}</span>;
                        }else{
                            return <span>{val + '->'}</span>
                        }
                        
                    }
                       
                    
                    
                )
                }
            </div>
            
        </>
    );
};
export default Append;