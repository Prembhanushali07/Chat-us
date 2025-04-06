import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import NotFoundComponent from "./pages/NotFound.jsx";
import { LayoutLoader } from "./components/layout/Loader.jsx";

const HomeComponent = lazy(() => import("./pages/Home.jsx"));
const LoginComponent = lazy(() => import("./pages/Login.jsx"));
const ChatComponent = lazy(() => import("./pages/Chat.jsx"));
const GroupComponent = lazy(() => import("./pages/Groups.jsx"));

let user = true;
const app = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/chat/:chatId" element={<ChatComponent />} />
            <Route path="/group" element={<GroupComponent />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectedRoute user={!user} redirect="/">
                <LoginComponent />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default app;
