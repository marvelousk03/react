// src/components/TodoList.js
import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function TodoList({ user }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodos(items);
    });
    return () => unsubscribe();
  }, [user]);

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const updateTodo = async (id, newTask) => {
    const docRef = doc(db, "todos", id);
    await updateDoc(docRef, { task: newTask });
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.task}
          <button onClick={() => deleteTodo(todo.id)}>🗑</button>
          <button onClick={() => {
            const newTask = prompt("Edit task", todo.task);
            if (newTask) updateTodo(todo.id, newTask);
          }}>✏</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
