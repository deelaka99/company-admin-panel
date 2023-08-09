import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Management from "./pages/management/Management";

function App() {
  return (
    <>
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/admin" >
                <Route index path="dashboard" element={<Dashboard />} />
                <Route index path="management" element={<Management />} />
              </Route>
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
