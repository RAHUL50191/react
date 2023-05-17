import React, { useState } from "react";
let counterId = 0;
export default function TODO() {
  const [Task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  function add() {
    setTodo((oldtodo) => {
      return [...oldtodo, { task: Task, id: counterId++ }];
    });
  }
  function remove(tid) {
    setTodo((oldtodo) => {
      return oldtodo.filter((item) => {
        return item.id !== tid;
      });
    });
  }
  return (
    <>
      <input
        type="text"
        value={Task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={add}>add</button>

      <ul>
        {todo.map((data) => {
          return (
            <div>
              <li>
                {data.task}
                {data.id}
              </li>
              <button onClick={() => remove(data.id)}>delete</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
