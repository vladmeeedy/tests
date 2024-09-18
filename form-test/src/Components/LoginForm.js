import React, { useState } from "react";
import { styles } from "../CSS/styles";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const credentials = {
      login,
      password,
    };

    try {
      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Помилка авторизації");
      }

      const data = await response.json();
    } catch (error) {
      console.error("Помлка вторизації:", error);
      setError("Невірний логін чи пароль");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Авторизація</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="login" style={styles.label}>
            Логін:
          </label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Пароль:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Вхід
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
