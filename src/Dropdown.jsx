import React from "react";  
import { useState } from "react";
import "./App.css";



const Dropdown = ()=>{
    const [activeIndex, setActiveIndex] = useState(null);
    const handleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="">
             <div className={`row toggle-div ${activeIndex === 0 ? 'active' : ''}`} onClick={()=> handleActiveIndex(0)}>
                <div className="">
                <span>Toggle 1</span>
                {activeIndex === 0 && ( <div className="toggle-content">Hidden Content 1</div>)}
                </div>
            </div>
            <div className={`row toggle-div ${activeIndex === 1 ? 'active' : ''}`} onClick={()=> handleActiveIndex(1)}>
                <div className="">
                <span>Toggle 2</span>
                {activeIndex === 1 && ( <div className="toggle-content">Hidden Content 2</div>)}
                </div>
            </div>
            <div className={`row toggle-div ${activeIndex === 2 ? 'active' : ''}`} onClick={()=> handleActiveIndex(2)}>
                <div className="">
                <span>Toggle 3</span>
                {activeIndex === 2 && ( <div className="toggle-content">Hidden Content 3</div>)}
                </div>
            </div>
        </div>
        
    );

}


export default Dropdown;