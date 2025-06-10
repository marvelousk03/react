// src/App.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import './styles.css'; 

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <h2>Welcome, {user.email}</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
      <Todo user={user} />
      <TodoList user={user} />
    </div>
  );
}

export default App;
