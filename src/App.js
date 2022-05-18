import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
    navigate(`${array.slice(0, index + 1).join('/')}`);
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
        <Route path="/Companysettngs" element={<Company />} />
        <Route path="/Companysettngs/Projectsettings" element={<Project />} />
        <Route
          path="/Companysettng/Projectsettings/Spicialproject"
          element={<SpecialProject />}
        />
      </Routes>
    </>
  );
};

export default App;
