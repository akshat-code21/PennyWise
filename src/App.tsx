import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AuthLayout from "./components/auth/AuthLayout";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DetailedExpenses from "./components/dashboard/detailedExpenses/DetailedExpenses";
import Insights from "./components/dashboard/insights/Insights";
import SavingTips from "./components/dashboard/savingTips/SavingTips";
import Dashboard from "./components/dashboard/home/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/signup" element={<Signup />}></Route>
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard/" element={<Dashboard />}></Route>
            <Route
              path="/dashboard/detailedExpenses"
              element={<DetailedExpenses />}
            ></Route>
            <Route path="/dashboard/insights" element={<Insights />}></Route>
            <Route
              path="/dashboard/savingTips"
              element={<SavingTips />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
