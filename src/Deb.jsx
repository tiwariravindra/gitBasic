import { useCallback, useState } from "react";

const Debouncing = () => {

    const [value, setValue] = useState("");
    const [timeOut, setTimeOut] = useState(null);
    const [data, setData] = useState([]);

    // Function to make an API call and filter the data based on the input value
    const apiCall = useCallback(async (inputValue) => {
        console.log('API Call with value:', inputValue);
        const getApiData = await fetch('https://dummyjson.com/todos');
        const getData = await getApiData.json();
        
        // Filter the data based on the input value
        const filteredData = getData.todos.filter(todo => 
            todo.todo.toLowerCase().includes(inputValue.toLowerCase())
        );
        
        setData(filteredData);
    }, []);

    // Handler for the input change with debounce logic
    const handleApiCall = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        // Clear the previous timeout if it exists
        if (timeOut) {
            clearTimeout(timeOut);
        }

        // Set a new timeout to call the API after 500ms
        const newTimeout = setTimeout(() => {
            apiCall(inputValue);  // Call the API with the input value
        }, 500);

        setTimeOut(newTimeout);
    };

    return (
        <div>
            <input 
                type="text" 
                value={value} 
                onChange={handleApiCall} 
                placeholder="Search todos..."
            />
            <h1>{value}</h1>

            {data && data.map((val, indx) => (
                <div key={val.id} style={{border: '1px solid black', height: '50px', width: '300px'}}>
                    <p>{val.todo}</p>
                </div>
            ))}
        </div>
    );
}

export default Debouncing;
