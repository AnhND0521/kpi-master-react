import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ConfirmCode from './pages/auth/ConfirmCode';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import AddKPI from './pages/kpi/AddKPI';
import Notifications from './pages/Notifications';
import KPIDetails from './pages/kpi/KPIDetails';
import EditKPI from './pages/kpi/EditKPI';
import TaskDetails from './pages/task/TaskDetails';
import Settings from './pages/settings/Settings';
import Theme from './pages/settings/Theme';
import PrivacyPolicy from './pages/settings/PrivacyPolicy'
import Feedback from './pages/settings/Feedback'
import Help from './pages/settings/Help'
import EditTask from './pages/task/EditTask';
import KPIReport from './pages/kpi/KPIReport';
import Schedule from './pages/Schedule';
import AddTask from './pages/task/AddTask';
import Profile from './pages/settings/Profile';
import KPIListPage from './pages/kpi/KPIListPage';
import RouletteGame from './pages/RouletteGame';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-code" element={<ConfirmCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/gacha" element={<RouletteGame />} />
          <Route path="/kpi-list" element={<KPIListPage />} />
          <Route path="/add-kpi" element={<AddKPI />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/kpi/:id" element={<KPIDetails />} />
          <Route path="/kpi/:id/report" element={<KPIReport />} />
          <Route path="/kpi/:id/edit" element={<EditKPI />} />
          <Route path="/kpi/:id/add-task" element={<AddTask />} />
          <Route path="/kpi/:id/task/:taskId" element={<TaskDetails />} />
          <Route path="/kpi/:id/task/:taskId/edit" element={<EditTask />} />
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/settings/theme" element={<Theme />} />
          <Route path="/settings/privacy" element={<PrivacyPolicy />} />
          <Route path="/settings/feedback" element={<Feedback />} />
          <Route path="/settings/help" element={<Help />} />
          <Route path="/settings/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
