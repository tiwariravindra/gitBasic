import React, { useEffect, useState , useRef } from "react";

const Todo = ()=> {

    const [todoData, setTodoData] = useState([]);
    
    const passRef = useRef('');
    
    useEffect(()=>{
        const fetchData = async ()=> {
            const fData = await fetch('https://dummyjson.com/todos');
            const getData = await fData.json();

            setTodoData (getData.todos);
           console.log(getData.todos);
        };

        fetchData();

    }, []);

    /*
    const getInputData = (event)=> {
        let inputData = event.target.value;
        setAddTodo(addTodo.target.value);
    }
    */

    const updateTodoList = ()=> {
        let inputVal = passRef.current.value;
        let idLength = todoData.length;
        let addTodoObj = {
            completed: false,
            id : idLength + 1,
            todo : inputVal,
            userId : idLength * 11
        };
        setTodoData((prevdata) => [...prevdata, addTodoObj]);
        console.log(addTodoObj);
    }

    return (
        <>
            <h1>ToDo List</h1>

            <div>
                
                <input type="text" id="addTodoInput"  ref= { passRef } />

                <button type="button" id="addTodoButton" onClick={ updateTodoList }> Add Todo</button>
                
            </div>

            <div>
                
                <select >
                {
                  todoData.map((item, index)=> ( <option key= {index} > { item.todo }</option> ))
                }
                </select>
                
            </div>
        </>
    );
};

export default Todo;