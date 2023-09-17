import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import AllUsers from './components/AllUsers/AllUsers';
import DashboradLanding from './partials/dashboard/DashBoardHome/DashboradLanding';
import ManagersPart from './components/Managers/ManagersPart';
import Field from './components/InputFiled/Field';
import Management from './components/ManagerManagement/Management';
import Payment from './components/PaymentManagement/Payment';
import ContentTemplates from './components/TemplatesManage/ContentTemplates';
import ReportingAndAnalytics from './components/GenerateReport/ReportingAndAnalytics';
import SettingsAndConfiguration from './components/SettingsandConfiguration/SettingsAndConfiguration';
import Activity from './components/UserAndManagerActivity/Activity';
import Monitoring from './components/HealthMonitoring/Monitoring';
import NewData from './components/Notifications/Notifications';
import AdminInfo from './components/AdminAccountInfo/AdminInfo';
import Help from './charts/HelpAndDocumentation/Help';
import Notifications from './components/Notifications/Notifications';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} >
          <Route exact path="/" element={<DashboradLanding />} />
          <Route exact path="/management/allusers" element={<AllUsers />} />
          <Route exact path="/managerManagemane/managers" element={<ManagersPart />} />
          <Route exact path="/addUser" element={<Field />} />
          <Route exact path="/users/support" element={<Management />} />
          <Route exact path="/payment/control" element={<Payment />} />
          <Route exact path="/content/templates" element={<ContentTemplates />} />
          <Route exact path="/report/anylistics" element={<ReportingAndAnalytics />} />

          <Route exact path="/settings/configuration" element={<SettingsAndConfiguration />} />


          <Route exact path="/activities/users&managers" element={<Activity />} />
          <Route exact path="/monitoring/status" element={<Monitoring />} />
          <Route exact path="/profile/adminInfo" element={<AdminInfo />} />
          <Route exact path="/help/documention" element={<Help />} />
          <Route exact path="/notifications/newdData" element={<Notifications />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
