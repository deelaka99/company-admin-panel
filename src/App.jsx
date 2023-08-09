import React from "react";
import AdminHome from "./pages/admin/AdminHome";
import Login from "./pages/Login";
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin-home" element={<AdminHome />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
