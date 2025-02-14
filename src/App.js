import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [path, setPath] = useState([]);

  const handlePath = () => {};
  const handleSubmit=()=>{
   onclick="document.getElementById('form1').submit();
  }


  //http://localhost:8080/find-path
  const findPath = async () => {
    try {
      const response = await axios.post("http://localhost:8080/find-path", {
        start,
        end,
      });
      console.log(response);
      setPath(response?.data);
    } catch (error) {
      console.error("bad response");
    }
  };

  return (
    <div>
      <>
        <div>
          Dfs Path Form
          <form id="form1">
            <div className="parent-container">
              <div>
                <label>startX:</label>
                <input type="text" />
              </div>
              <div>
                <label>StartY:</label>
                <input type="text" />
              </div>
            </div>
            <div className="parent-container">
              <div>
                <label>EndX:</label>
                <input type="text" />
              </div>
              <div>
                <label>EndY:</label>
                <input type="text" />
              </div>
            </div>
            <button type="submit" value="Submit" onclick="handleSubmit">
              Submit
            </button>
          </form>
        </div>
      </>
    </div>
  );
};

export default App;
