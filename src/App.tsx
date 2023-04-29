import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";


function App() {

  const location = useLocation();
  const isHeaderVisible = (location.pathname !== "/signin") && (location.pathname !== "/notfound");

  return (
    <div>
      {isHeaderVisible && <Header />}
      <Routes>
        <Route exact path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route exact path="/tasks" element={<ProtectedRoute element={ <TaskApp/> } />} />
        <Route exact path="/tasks/:id" element={<ProtectedRoute element={ <TaskDetailsPage/> } />} />
        <Route exact path="/signin" element={ <Signin/>} />
        <Route exact path="/notfound" element={<NotFound />} />
        <Route exact path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export default App;
