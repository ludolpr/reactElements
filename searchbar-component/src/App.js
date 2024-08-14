import "./App.css";
import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";

function App() {
  const dataArray = [
    "john",
    "jean",
    "emilie",
    "richard",
    "fred",
    "lea",
    "tom",
    "willy",
  ];

  const dataObject = [
    { name: "john", details: { age: 32, type: "gentil" } },
    { name: "Marie", details: { age: 28, type: "amicale" } },
    { name: "Pierre", details: { age: 45, type: "sérieux" } },
    { name: "Sophie", details: { age: 37, type: "joyeuse" } },
    { name: "Lucas", details: { age: 22, type: "dynamique" } },
    { name: "Isabelle", details: { age: 41, type: "compréhensive" } },
    { name: "Thomas", details: { age: 29, type: "créatif" } },
    { name: "Emma", details: { age: 34, type: "intelligente" } },
    { name: "Julien", details: { age: 50, type: "sage" } },
  ];
  const [data, setData] = useState(dataArray);
  const [data2, setData2] = useState(dataObject);

  return (
    <div className="App">
      <div>
        <h1>data Array</h1>
        <SearchBar list={dataArray} setList={setData} />
        {data.map((item, index) => (
          <p key={index}> {item} </p>
        ))}
      </div>
      <div>
        <h1>data Object</h1>
        <SearchBar
          placeholder={"filter by age"}
          filterField={(item) => item.details.age.toString()}
          list={dataObject}
          setList={setData2}
        />

        {data2.map((item, index) => (
          <p key={index}>
            {item.name} | {item.details.age} ans | {item.details.type}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
