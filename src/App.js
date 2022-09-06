import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const handleClick = () => {
    if (input !== "") {
      setList([...list, input]);
      setInput("");
    }

    function DeleteTask(id) {
      const ListaFiltrada = list.filter((item) => item.id !== id);
      setList(ListaFiltrada);
    }
  };
  return (
    <div>
      <h1>Metas a serem cumpridas:</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          +
        </button>
      </form>
      <ul>
        {list.map((item) => (
          <li>
            {item.value}{" "}
            <Button
              onClick={() => {
                DeleteTask(item.id);
              }}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
