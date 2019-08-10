import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { async } from "q";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

interface List {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function RenderList() {
  const { listData, setListData } = useState([]);
  async function getApiData(url: string) {
    const data = await axios.get(url);
    return data;
  }

  useEffect(() => {
    const data = getApiData("http://jsonplaceholder.typicode.com/posts");
    console.log(useEffect);
    setListData(data);
  });

  return (
    <ul>
      {listData.map((elem, index) => (
        <li key={index}>
          {elem.id}-{elem.title}
        </li>
      ))}
    </ul>
  );
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Example />
    </div>
  );
};

export default App;
