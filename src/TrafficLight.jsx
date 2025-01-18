import React, { useEffect, useState } from "react";
import "./App.css";

const TrafficLight = () => {
  const [light, setLight] = useState("red");
  //const [timer, setTimer] = useState(null);
  const lightDurations = {
    red: 4000,
    yellow: 1000,
    green: 5000,
  };

  useEffect(() => {
    let currentLight = "green";
    let timeoutId = null;

    const nextLight = () => {

        if(currentLight === "red"){
            currentLight = "yellow";
        }
        else if(currentLight === "yellow"){
            currentLight = "green";
        }
        else if(currentLight === "green"){
            currentLight = "red";
        }
      
      setLight(currentLight);
      timeoutId = setTimeout(nextLight, lightDurations[currentLight]);
      
    };

    nextLight();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <div className="traffic-light">
        <div className={`${light}`}></div>
      </div>
    </>
  );
};

export default TrafficLight;