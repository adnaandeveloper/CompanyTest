import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StyledTag from '../components/StyledTag';

const Setting = () => {
  let navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <StyledTag bold />
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5rem',
          display: 'flex',
          width: '30rem',
          height: '100%',
        }}
      >
        <div>
          <h1
            style={{ cursor: 'pointer' }}
            onClick={() =>
              navigate('/companysettng/projectsettings/spicialproject')
            }
          >
            Go to the last page
          </h1>
        </div>
        <div>(only for testing purpose)</div>
      </div>
    </>
  );
};

export default Setting;
