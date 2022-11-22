import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { PublicRoutes } from "../components/PublicRoutes";
import { RequireAuth } from "../components/RequireAuth";
import { Administrative } from "../views/Administrative";
import { App } from "../views/App";
import { Dashboard } from "../views/Dashboard";
import { Errorpage } from "../views/Errorpage";
import { ForgotPassword } from "../views/ForgotPassword";
import { Signin } from "../views/Signin";
import { Signup } from "../views/Signup";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<PublicRoutes />}>
          <Route index element={<Signin />} />
          <Route path="register" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/administrativo" element={<Administrative />} />
          </Route>
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Route>
    </Routes>
  );
};
