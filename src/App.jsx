import { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // check whether email and password is valid or not
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      console.log(user);
    } else if (email === "user@me.com" && password === "123") {
      setUser("employee");
      console.log(user);
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
