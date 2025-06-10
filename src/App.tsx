
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginForm from "./components/LoginForm";
import BusinessSignupForm from "./components/BusinessSignUpForm.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import InwardTransactions from "./pages/InwardTransactions";
import InwardReports from "./pages/InwardReports";
import OutwardTransactions from "./pages/OutwardTransactions";
import OutwardReports from "./pages/OutwardReports";
import AccountStatement from "./pages/AccountStatement";
import LandingPage from "@/components/LandingPage.tsx";
import Profile from "./pages/Profile";
import {useAppStore} from "@/store";
import {useEffect} from "react";



const queryClient = new QueryClient();

const App = () => {
  const token = useAppStore((state) => state.token);
  const fetchDashboard = useAppStore((state) => state.fetchDashboard);

  useEffect(() => {
    if (token) {
      fetchDashboard();
    }
  }, [token]);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<LandingPage />} />*/}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<BusinessSignupForm />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inward/transactions" element={<InwardTransactions />} />
            <Route path="inward/reports" element={<InwardReports />} />
            <Route path="outward/transactions" element={<OutwardTransactions />} />
            <Route path="outward/reports" element={<OutwardReports />} />
            <Route path="account-statement" element={<AccountStatement />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)};

export default App;
