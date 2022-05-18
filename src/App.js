import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import StyledBreadcrumb from './components/StyledBreadcrumb';

import { useLocation } from 'react-router-dom';
import Setting from './pages/Setting';
import Company from './pages/Company';
import Project from './pages/Project';
import SpecialProject from './pages/SpecialProject';

const App = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const onBack = (array, index) => {
    navigate(`${array.slice(0, index - 1).join('/')}`);
    console.log('hello adnaan');
  };

  return (
    <>
      <StyledBreadcrumb
        breadCrumbs={location}
        homePath="Settings"
        onBack={onBack}
      />
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
