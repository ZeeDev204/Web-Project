import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import DoctorDashboard from './pages/doctor/Dashboard';
import PatientDashboard from './pages/patient/Dashboard';
import PatientManagement from './pages/doctor/PatientManagement';
import Appointments from './pages/doctor/Appointments';
import PatientDetail from './pages/doctor/PatientDetail';
import Reports from './pages/doctor/Reports';
import HealthTips from './pages/doctor/HealthTips';
import Availability from './pages/doctor/Availability';
import PatientProfile from './pages/patient/Profile';
import BookAppointment from './pages/patient/BookAppointment';
import MyAppointments from './pages/patient/MyAppointments';
import MyReports from './pages/patient/MyReports';
import Notifications from './pages/patient/Notifications';
import PatientHealthTips from './pages/patient/HealthTips';
import Unauthorized from './pages/Unauthorized';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Doctor Routes */}
        <Route path="/doctor/dashboard" element={
            <DoctorDashboard />
        
        } />
        <Route path="/doctor/patients" element={
            <PatientManagement />
        } />
        <Route path="/doctor/appointments" element={
            <Appointments />
        } />
        <Route path="/doctor/patient/:id" element={
            <PatientDetail />
        } />
        <Route path="/doctor/reports" element={
            <Reports />
        } />
        <Route path="/doctor/health-tips" element={
            <HealthTips />
        } />
        <Route path="/doctor/availability" element={
            <Availability />
        } />

        <Route path="/patient/dashboard" element={
            <PatientDashboard />
        } />
        <Route path="/patient/profile" element={
            <PatientProfile />
        } />
        <Route path="/patient/book-appointment" element={
            <BookAppointment />
        } />
        <Route path="/patient/appointments" element={
            <MyAppointments />
        } />
        <Route path="/patient/reports" element={
            <MyReports />
        } />
        <Route path="/patient/notifications" element={
            <Notifications />
        } />
        <Route path="/patient/health-tips" element={
            <PatientHealthTips />
        } />
      </Routes>
    </UserProvider>
  );
};

export default App;
