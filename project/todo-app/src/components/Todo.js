// src/components/Todo.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function Todo({ user }) {
  const [task, setTask] = useState("");

  const addTodo = async () => {
    if (!task) return;
    await addDoc(collection(db, "todos"), {
      task,
      userId: user.uid,
      createdAt: new Date()
    });
    setTask("");
  };

  return (
    <div>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="New task" />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Todo;
