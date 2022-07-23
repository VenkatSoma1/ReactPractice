import React, { useState } from "react";
import "../App.css";

const Calculator = () => {
  const [number, setNumber] = useState("");

  const getCodeHandler = (no) => {
    if (no === "=") {
      // eslint-disable-next-line no-eval
      setNumber(eval(number).toString());
      return false;
    } else if (no === "clear") {
      setNumber("");
      return false;
    }
    setNumber(number.concat(no));
  };

  return (
    <div className="calculatorContainer">
      <div className="rowBox resultShowBox">
        <div className="inputResults">{number}</div>
      </div>
      <div
        className="rowBox"
        style={{ flex: "0 0 68%" }}
        onClick={() => getCodeHandler("clear")}
      >
        X
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(0)}>
        0
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(1)}>
        1
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(2)}>
        2
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(3)}>
        3
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(4)}>
        4
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(5)}>
        5
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(6)}>
        6
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(7)}>
        7
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(8)}>
        8
      </div>
      <div className="rowBox" onClick={() => getCodeHandler(9)}>
        9
      </div>
      <div className="rowBox" onClick={() => getCodeHandler("*")}>
        *
      </div>
      <div className="rowBox" onClick={() => getCodeHandler("+")}>
        +
      </div>
      <div className="rowBox" onClick={() => getCodeHandler("-")}>
        -
      </div>
      <div className="rowBox" onClick={() => getCodeHandler("%")}>
        %
      </div>
      <div className="rowBox" onClick={() => getCodeHandler("/")}>
        /
      </div>
      <div className="rowBox" onClick={() => getCodeHandler("=")}>
        =
      </div>
    </div>
  );
};

export default Calculator;
