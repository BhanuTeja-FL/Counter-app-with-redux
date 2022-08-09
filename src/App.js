import "./App.css";
import { incrementHandler, decrementHandler } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(1);
  const counterChangeHandler = useSelector(
    (state) => state.counterChangeHandler
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="head-box">
        <h1 className="heading">welcome</h1>
      </div>
      <div>
        <select
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="head-box">
        <button onClick={() => dispatch(decrementHandler(Number(value)))}>-</button>
        <input value={counterChangeHandler} />
        <button onClick={() => dispatch(incrementHandler(Number(value)))}>+</button>
      </div>
    </>
  );
}

export default App;
