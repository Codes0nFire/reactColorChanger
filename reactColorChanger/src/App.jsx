import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setcolor] = useState("violet");

  return (
    <>
      <div
        className="main w-full h-screen  text-white
     flex  items-center justify-end flex-col"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="bar text-white w-8/12 p-6 mb-4 bg-black flex items-center justify-center gap-4 rounded-lg">
          <button
            className="   px-6 py-4 rounded-3xl"
            style={{ backgroundColor: `green` }}
            onClick={(e) => setcolor("green")}
          >
            green
          </button>

          <button
            className="   px-6 py-4 rounded-3xl"
            style={{ backgroundColor: `blue` }}
            onClick={(e) => setcolor("blue")}
          >
            blue
          </button>

          <button
            className="   px-6 py-4 rounded-3xl"
            style={{ backgroundColor: `red` }}
            onClick={(e) => setcolor("red")}
          >
            red
          </button>

          <button
            className="   px-6 py-4 rounded-3xl"
            style={{ backgroundColor: `pink` }}
            onClick={(e) => setcolor("pink")}
          >
            pink
          </button>

          <button
            className="   px-6 py-4 rounded-3xl"
            style={{ backgroundColor: `violet` }}
            onClick={(e) => setcolor("violet")}
          >
            violet
          </button>

          <button
            className="   px-6 py-4 rounded-3xl"
            style={{ backgroundColor: `yellow` }}
            onClick={(e) => setcolor("yellow")}
          >
            yellow
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
