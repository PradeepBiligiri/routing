import "./App.css";
import { About } from "./About";
import { Navigate } from "./Navigate";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Employees } from "./Employees";
import { EmployeeCreate } from "./EmployeeCreate";
import { EmployeeDetails } from "./EmployeeDetails";
function App() {
  return (
    <div className="App">
      <Navigate />
      {/* <h1>App page</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/create" element={<EmployeeCreate />} />
        <Route path="/employees/view/:id" element={<EmployeeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
