// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    // Admin predeterminado
    { email: "admin@example.com", password: "admin123", role: "admin" }
  ]);
  const navigate = useNavigate();

  // Función para loguear al usuario
  const login = (email, password) => {
    const foundUser = users.find(user => user.email === email && user.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // Función para registrar un nuevo usuario
  const register = (email, password) => {
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert("El email ya está registrado.");
      return;
    }

    const newUser = {
      email,
      password,
      role: "user" // Por defecto, los nuevos usuarios son 'user'
    };

    setUsers([...users, newUser]);
    alert("Registro exitoso. Ya puedes iniciar sesión.");
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

const logout = () => {
  setUser(null);  // Borra el usuario del contexto
  // Aquí puedes eliminar el token o hacer cualquier otra limpieza necesaria
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
