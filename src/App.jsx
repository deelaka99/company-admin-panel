import React from "react";
import AdminHome from "./pages/admin/AdminHome";
import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import AddNewLab from "./components/management/AddNewLab";

function App() {
  return (
    <>
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/admin-home" element={<AdminHome />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="management" element={<AddNewLab />} />
                <Route path="profile" element={<Dashboard />} />
                <Route path="settings" element={<Dashboard />} />
              </Route>
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
