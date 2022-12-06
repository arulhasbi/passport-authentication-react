import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(() => {
    return {
      user,
      login,
      logout,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
