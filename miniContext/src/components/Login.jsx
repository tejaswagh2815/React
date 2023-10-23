import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { serUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefalut();
    serUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="useName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="pssword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
