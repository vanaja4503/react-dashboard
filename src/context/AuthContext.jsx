import {
  createContext,
  useState,
} from "react";

export const AuthContext = createContext(null);

function getSavedUser() {
  try {
    const savedUser = localStorage.getItem("dashboard-user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  function login(email, password) {
    if (!email.trim() || !password.trim()) {
      throw new Error("Email and password are required.");
    }

    // Demo authentication only; no server verifies credentials.
    const loggedInUser = {
      email,
      name: email.split("@")[0],
    };

    localStorage.setItem(
      "dashboard-user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);
  }

  function logout() {
    localStorage.removeItem("dashboard-user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}