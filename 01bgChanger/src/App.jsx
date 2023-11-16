import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Purple");

  return (
    <>
      <div style={{ backgroundColor: color }} id="fullwindow">
        <div id="main">
          <button style={{ backgroundColor:"red" }} onClick={() =>setColor("Red")} >Red</button>
          <button style={{ backgroundColor:"Blue" }} onClick={() =>setColor("Blue")}>Blue</button>
          <button style={{ backgroundColor:"Orange" }} onClick={() =>setColor("Orange")} >Orange</button>
          <button style={{ backgroundColor:"darkviolet"}} onClick={() =>setColor("darkviolet")} >Violet</button>
          <button style={{ backgroundColor:"Pink" }} onClick={() =>setColor("Pink")} >Pink</button>
          <button style={{ backgroundColor:"Green" }} onClick={() =>setColor("Green")} >Green</button>
          <button style={{ backgroundColor:"HotPink" }} onClick={() =>setColor("HotPink")} >HotPink</button>
        </div>
      </div>
    </>
  );
}

export default App;
