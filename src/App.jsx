import { useEffect } from "react";
import Login from "./components/Auth/Login";
// import { setLocalStorage } from "./utils/localStorage";
import { getLocalStorage } from "./utils/localStorage";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  });

  return (
    <div>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  );
};

export default App;
