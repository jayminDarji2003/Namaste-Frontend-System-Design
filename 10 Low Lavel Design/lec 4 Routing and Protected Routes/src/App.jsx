import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-blue-200">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* protected route  */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
          </Route>

          {/* syntax 2 of protected route   */}
          {/* <Route
            path="/user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
