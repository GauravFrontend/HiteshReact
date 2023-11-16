import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [passward, setPassward] = useState("");
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const PasswardGenerator = useCallback(() => {
    let pass = "";
    let alpha = "DLSFJAPEOIHFKLAJRBFALJRaaksdfkadsfihaieanekna";
    if (number) {
      alpha += "12346587934";
    }
    if (symbol) alpha += "!@#$%^&*())(*&^%$#@!";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * alpha.length + 1);
      pass += alpha.charAt(random);
    }
    console.log(alpha);
    setPassward(pass);
  }, [length, number, symbol]);

  useEffect(() => {
    PasswardGenerator();
  }, [number, symbol, length]);

  const passwordRef = useRef(null);

  const PassCopy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(passward);
  }, [passward]);

  return (
    <>
      <input className="w-80"
        ref={passwordRef}
        value={passward}
        readOnly
        type="text"
        placeholder="Passward"
      />

      <button id="copyText" onClick={PassCopy} className="bg-red-400 w-40">
        COPY
      </button>

      <input
        value={length}
        max={50}
        onChange={(e) => setLength(e.target.value)}
        type="range"
      />
      <label>Range:{length}</label>
      <input
        value={number}
        onChange={() => {
          setNumber((prev) => !prev);
        }}
        type="checkbox"
      />
      <label>Number</label>
      <input
        value={symbol}
        onChange={() => {
          setSymbol((prev) => !prev);
        }}
        type="checkbox"
      />
      <label>Symbol</label>
    </>
  );
}

export default App;
