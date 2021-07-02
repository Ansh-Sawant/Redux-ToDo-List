import React, { useState } from "react";
import "./App.css";
import { addTodo, deleteTodo, removeTodo } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <figure>
          <figcaption>Add Your List Here</figcaption>
        </figure>

        <div style={{ margin: "30px" }}>
          <div>
            <input
              type="text"
              placeholder="✍️ Add Items .. "
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          {list.map((elem) => {
            return (
              <div className="notes" key={elem.id}>
                <h3>{elem.data}</h3>
                <i
                  className="far fa-trash-alt add-btn"
                  title="delete item"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                ></i>
              </div>
            );
          })}

          <button onClick={() => dispatch(removeTodo())}>Check List</button>
        </div>
      </div>
    </>
  );
};

export default App;
