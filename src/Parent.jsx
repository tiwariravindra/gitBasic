import { useContext } from "react";
import Child from "./Child";
import { useGlobalContext } from "./contextApi/userContext";

const Parent = () => {
    const { userData }= useGlobalContext();

    return (
        <>
            <h1>Parent: {userData.name}</h1>
            <h1>Parent: {userData.age}</h1>
            <h1>Parent: {userData.text}</h1>
            <Child />
        </>
    );
};

export default Parent;
