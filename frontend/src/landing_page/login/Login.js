import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // ✅ Check if user exists, else redirect to signup
  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (!existingUser) {
      setMessage("⚠️ No account found. Redirecting to Signup...");
      setTimeout(() => {
        navigate("/signup");
      }, 1500);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      setMessage("⚠️ All fields are required!");
      return;
    }

    if (!storedUser) {
      setMessage("⚠️ User not registered!");
      return;
    }

    // ✅ Just for demo: we don't check password here since signup didn't save it
    if (storedUser.email === email) {
      setMessage("✅ Login successful! Redirecting to Dashboard...");

      // Redirect to another folder/port (your dashboard app)
      setTimeout(() => {
        window.location.href = "http://localhost:3002"; // change port if needed
      }, 1500);
    } else {
      setMessage("❌ Invalid credentials!");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {!localStorage.getItem("user") ? null : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login & Go to Dashboard
          </button>
        </form>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  button: {
    padding: "12px",
    backgroundColor: "#4c63afff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: { marginTop: "15px", fontWeight: "bold" },
};

export default Login;
