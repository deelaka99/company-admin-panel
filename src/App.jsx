import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Management from "./pages/management/Management";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";

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
                <Route path="management" element={<Management />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
