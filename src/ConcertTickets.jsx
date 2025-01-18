import React , {useState, useEffect} from "react";

const Concert = ()=>{
    const [vip, setVip] = useState(5);
    const [normal, setNormal] = useState(6);
    const [economy, setEconomy] = useState(8);
    const [count, setcount] = useState(1);
    const [selectSeat, setEelectSeat] = useState([]);

    const handleClick = (e) =>{
        console.log(e);
       
        setcount((prev) => {
            console.log(prev);
            console.log(selectSeat);
            if(prev > 5){
                alert('Only 5 seats are allowed!');
                return false;
            }else{
                let selected = e;
                setEelectSeat((prevSeat) => [...prevSeat, selected]);
               return prev +1;
            }
            
        });
       

    }

    const checkSeats = () =>{
        
        alert(`Selected Seats: ${selectSeat.toString()}`);
       

    }

    return (
        <>
        <div>
            <button onClick={checkSeats}>Check Seats</button>
        </div>
            <div>
                <h1>VIP Section</h1>
            </div>
            <div>
                {Array.from({ length: vip }, (_, i) => (
                    <div key={i}>
                        {Array.from({ length: vip }, (_, j) => (
                            <button onClick={()=> handleClick(`VIP-${i * normal + j + 1}`)} key={j} >VIP {i * vip + j + 1}</button>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <h1>Normal Section</h1>
            </div>
            <div>
                {Array.from({ length: normal }, (_, i) => (
                    <div key={i}>
                        {Array.from({ length: normal }, (_, j) => (
                            <button onClick={()=> handleClick(`Normal-${i * normal + j + 1}`)} key={j}>Normal {i * normal + j + 1}</button>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <h1>Economy Section</h1>
            </div>
            <div>
                {Array.from({ length: economy }, (_, i) => (
                    <div key={i}>
                        {Array.from({ length: economy }, (_, j) => (
                            <button onClick={()=>handleClick(`Economy-${i * normal + j + 1}`)}  key={j}>Economy {i * economy + j + 1}</button>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Concert;