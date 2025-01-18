import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setError(false);
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiRes = await fetch("https://dummyapi.online/api/movies");
        /*const apiRes = await fetch(
          "https://dummy.restapiexample.com/api/v1/employees",
        );
        */
        const data = await apiRes.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <button onClick={handleCount}>Click to increment {count}</button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      <div className="container">
      <div className="row mt-2">
        <table className="col-md-12  table-light table-striped">
          <thead>
            <tr>
              <th className="">ID </th>
              <th className="">Name </th>
              <th className=""> Email </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3"> Loading...</td>
              </tr>
            ) : (
              user.map((movie, index) => (
                <tr key={index}>
                  <td className="">{movie.id}</td>
                  <td className="">{movie.movie}</td>
                  <td className="">{movie.rating}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {error && <p>Error: {error.message}</p>}
      </div>
      </div>
    </>
  );
}

export default App;
