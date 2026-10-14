import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import ErrorMessage from "../components/common/ErrorMessage";
import { validateLoginForm } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>Already logged in</h1>
          <Button
            onClick={() => navigate("/dashboard", { replace: true })}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      validateLoginForm(email, password);
      login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login-page">
      <form
        className="login-card"
        onSubmit={handleSubmit}
      >
        <h1>Welcome Back</h1>
        <p>Sign in to your dashboard</p>

        {error && <ErrorMessage message={error} />}

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
        />

        <Button type="submit">
          Login
        </Button>

        <p className="demo-note">
          Demo only: any non-empty password works.
        </p>
      </form>
    </div>
  );
}

export default Login;