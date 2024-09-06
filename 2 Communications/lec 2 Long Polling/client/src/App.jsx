import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});
  let last = data?.data;

  useEffect(() => {
    getData(last);
  }, []);

  async function getData(lastData) {
    try {
      const response = await fetch(
        `http://localhost:4000/getData?lastData=${lastData}`
      );
      const json = await response.json();
      setData(json);
      // console.log(json)
      getData(json.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Long Polling</h1>
      <p>{data?.data}</p>
    </div>
  );
};

export default App;
