import { useState } from "react";
import "../Login/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required", { autoClose: 1500 });
    }

    if (username.trim() === "") {
      return toast.error("Username is required", { autoClose: 1500 });
    }

    if (password.trim() === "") {
      return toast.error("Password is required", { autoClose: 1500 });
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords don't match", { autoClose: 1500 });
    }

    return toast.success("Registration Successful!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000
    });
  };
  return (
    <div className="form-wrapper">
      <ToastContainer theme="light" />
      <form onSubmit={formSubmitHandler} className="form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="form-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
