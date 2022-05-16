import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StyledBreadcrumb from './components/StyledBreadcrumb';

import { useLocation } from 'react-router-dom';
import Setting from './pages/Setting';
import Company from './pages/Company';
import Project from './pages/Project';
import SpecialProject from './pages/SpecialProject';

const App = () => {
  const location = useLocation();

  return (
    <>
      <StyledBreadcrumb location={location} homePath="Settings" />
      <Routes>
        <Route path="/" element={<Setting />} />
        <Route path="/companysettngs" element={<Company />} />
        <Route path="/companysettngs/projectsettings" element={<Project />} />
        <Route
          path="/companysettng/projectsettings/spicialproject"
          element={<SpecialProject />}
        />
      </Routes>
    </>
  );
};

export default App;
