"use client";

import { authenticate } from "@/app/Backend/formActions";
import styles from "@/app/ui/login/loginForm/loginForm.module.css";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState();

  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data && setError(data);
  };

  return (
    <div className={styles.container}>
      <form action={handleLogin} className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button>SUBMIT</button>
        {error && error}
      </form>
    </div>
  );
};

export default LoginForm;
