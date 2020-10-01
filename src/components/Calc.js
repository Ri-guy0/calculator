import React, { useState } from "react";

import "./Calc.css";

const Calc = () => {
  const [savedNum, setSavedNum] = useState("0");
  const [curNum, setCurNum] = useState("");
  const [operator, setOperator] = useState("");
  const [isDecimal, setIsDecimal] = useState(false);

  const toggleDecimal = () => {
    if (parseFloat(curNum) % 1 === 0) {
      setIsDecimal(!isDecimal);
    }
  };

  const appendCur = (number) => {
    if (isDecimal || curNum === "0") {
      setCurNum(curNum + "." + number);
      setIsDecimal(false);
    } else {
      setCurNum(curNum + number);
    }
    console.log(curNum);
  };

  const deleteDigit = () => {
    setCurNum(curNum.substring(0, curNum.length - 1));
  };

  const setGeneralOperator = (generalOperator) => {
    if (operator !== "" || curNum !== "") {
      evalute();
    }
    setOperator(generalOperator);
  };

  const evalute = () => {
    if (operator === "") {
      if (curNum === "") {
        setSavedNum("0");
      } else {
        setSavedNum(curNum);
      }
    }

    if (operator === "+") {
      setSavedNum(parseFloat(savedNum) + parseFloat(curNum));
    }
    if (operator === "-") {
      setSavedNum(parseFloat(savedNum) - parseFloat(curNum));
    }
    if (operator === "÷") {
      setSavedNum(parseFloat(savedNum) / parseFloat(curNum));
    }
    if (operator === "×") {
      setSavedNum(parseFloat(savedNum) * parseFloat(curNum));
    }

    setCurNum("");
    setOperator("");
    setIsDecimal(false);
  };

  return (
    <div className="app">
      <div className="outputContainer">
        <div className="savedNumber">{savedNum}</div>
        <div className="inputEqn">
          {operator} {curNum} {isDecimal ? "." : null}
        </div>
      </div>
      <div className="numberGrid">
        <button onClick={(number) => appendCur(7)}> 7 </button>
        <button onClick={(number) => appendCur(8)}> 8 </button>
        <button onClick={(number) => appendCur(9)}> 9 </button>
        {operator === "÷" ? (
          <button
            className="activeButton"
            onClick={(generalOperator) => setGeneralOperator("÷")}
          >
            ÷
          </button>
        ) : (
          <button onClick={(generalOperator) => setGeneralOperator("÷")}>
            ÷
          </button>
        )}

        <button onClick={(number) => appendCur(4)}> 4 </button>
        <button onClick={(number) => appendCur(5)}> 5 </button>
        <button onClick={(number) => appendCur(6)}> 6 </button>
        {operator === "×" ? (
          <button
            className="activeButton"
            onClick={(generalOperator) => setGeneralOperator("×")}
          >
            ×
          </button>
        ) : (
          <button onClick={(generalOperator) => setGeneralOperator("×")}>
            ×
          </button>
        )}

        <button onClick={(number) => appendCur(3)}> 3 </button>
        <button onClick={(number) => appendCur(2)}> 2 </button>
        <button onClick={(number) => appendCur(1)}> 1 </button>
        {operator === "-" ? (
          <button
            className="activeButton"
            onClick={(generalOperator) => setGeneralOperator("-")}
          >
            -
          </button>
        ) : (
          <button onClick={(generalOperator) => setGeneralOperator("-")}>
            -
          </button>
        )}

        <button onClick={(number) => appendCur(0)}> 0 </button>

        <button className="deleteDigit" onClick={() => deleteDigit()}>
          del
        </button>
        {isDecimal ? (
          <button className="activeButton" onClick={toggleDecimal}>
            .
          </button>
        ) : (
          <button onClick={toggleDecimal}>.</button>
        )}
        {operator === "+" ? (
          <button
            className="activeButton"
            onClick={(generalOperator) => setGeneralOperator("+")}
          >
            +
          </button>
        ) : (
          <button onClick={(generalOperator) => setGeneralOperator("+")}>
            +
          </button>
        )}

        <button className="equal" onClick={() => evalute()}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calc;
