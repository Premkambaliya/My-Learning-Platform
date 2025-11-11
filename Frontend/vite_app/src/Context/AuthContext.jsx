import { createContext, useState, useEffect, useContext } from "react";

// Create context with default value
export const AuthContext = createContext({
  user: null,
  login: async () => { },
  signup: async () => { },
  logout: () => { },
  loading: false,
  error: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("https://my-learning-platform-0eju.onrender.com/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        // Backend returns the user document directly
        setUser(data);
      } else {
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  // In login function, update the response handling:
  const login = async (email, password) => {
    setError(null);
    try {
      const response = await fetch("https://my-learning-platform-0eju.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (!data.token) {
        throw new Error("No authentication token received");
      }

      localStorage.setItem("token", data.token);
      setUser(data.user);
      return data;
    } catch (err) {
      setError(err.message);
      localStorage.removeItem("token"); // Clear invalid token if any
      throw err;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await fetch("https://my-learning-platform-0eju.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // Abhi sirf OTP bheja gaya hai, verify page dikhao
      return data; // return full data
    } catch (error) {
      throw error;
    }
  };



  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add useAuth hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};