import React, { useState } from "react";
import data from "./data";
function App() {
  const log = console.log;
  const [number, setNumber] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    const value = document.querySelector("input").value;
    setNumber(value);
  }
  return (
    <div className="max-w-2xl mx-auto my-8 font-bold text-center bg-white p-8 rounded-xl shadow-xl">
      <h3 className="mb-8">TIRED OF BORING LOREM IPSUM?</h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center justify-center mb-12"
      >
        <label>Paragraph: </label>
        <input name="number" type="number" placeholder="0" min="0" max="8" />
        <button className="ml-2 uppercase bg-main font-normal px-4 rounded-md pb-1 tracking-widest hover:opacity-50 transition-all">
          Generate
        </button>
      </form>
      <div>
        {data
          .filter((item, i) => {
            return i < number;
          })
          .map((item) => (
            <p className="mb-4">{item}</p>
          ))}
      </div>
    </div>
  );
}

export default App;
