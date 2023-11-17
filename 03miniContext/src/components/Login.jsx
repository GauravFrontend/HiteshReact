import React, { useContext, useState } from "react";
import useUser, { UserContext } from "../context/UserContext";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useUser()

  const handleClick = (e) => {
    e.preventDefault() 
    setUser({username,password})
    }
  return (
    <>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default Login;
