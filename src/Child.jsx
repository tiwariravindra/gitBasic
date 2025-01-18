import React, { useEffect } from "react";
import { useGlobalContext } from "./contextApi/userContext";

const Child = () => {
  let { userData, updateUser } = useGlobalContext();
  //const [data , setData] = React.useState(userData);
console.log("🚀 ~ file: Child.jsx ~ line 8 ~ Child ~ userData", userData);

  const addVal = () => {
    updateUser({ text: "New data from child: " + Math.random() });
    
    console.log("Child ~ userData", userData);

  };


  return (
    <>
     <div>
      Child: My name is {userData.name} and my age is {userData.age}.
    </div>

    <div><button onClick={ addVal }>Click</button></div>
    </>
   
  );
};

export default Child;
