import React, { useState } from 'react';
import { Breadcrumb, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';

const StyledBreadcrumb = (props) => {
  let navigate = useNavigate();
  const pathnames = props.breadCrumbs.pathname.split('/');
  const [backPath, setBackPath] = useState(pathnames.length);
  const homepath = pathnames.map(
    (item, index) =>
      index === 0 && (
        <div key={index} style={{ marginRight: 5 }}>
          {props.homePath}
        </div>
      )
  );
  const homePathWithArrow = props.showArrow ? (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <ArrowLeftOutlined style={{ marginRight: '4px' }} /> {homepath}
    </div>
  ) : (
    <div style={{ cursor: 'pointer' }}>{homepath}</div>
  );
  const lastPath = pathnames.map(
    (item, index, arr) =>
      arr.length - 1 === index && (
        <div style={{ fontWeight: '800' }}>
          <ArrowLeftOutlined
            key={index}
            onClick={() => {
              navigate(`${pathnames.slice(0, backPath - 1).join('/')}`);
              setBackPath(backPath - 1);
            }}
          />
          {item}
        </div>
      )
  );

  return (
    <Row>
      <Breadcrumb separator={' '} style={{ display: 'flex' }}>
        {pathnames.map((item, index, arr) =>
          index === 0 ? (
            <BreadcrumbItem
              key={index}
              style={{ marginRight: '2px' }}
              onClick={() => navigate('/')}
            >
              {homePathWithArrow}
            </BreadcrumbItem>
          ) : item.length > 0 && arr.length - 1 === index ? (
            <Col span={24} style={{ marginTop: -8 }}>
              <BreadcrumbItem
                key={index}
                style={{ display: 'flex', flexDirection: 'row ' }}
              >
                <div>{lastPath}</div>
              </BreadcrumbItem>
            </Col>
          ) : (
            <BreadcrumbItem
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => props.onBack(pathnames, index)}
            >
              {item.length > 1 && '/ '} {item}
            </BreadcrumbItem>
          )
        )}
      </Breadcrumb>
    </Row>
  );
};

export default StyledBreadcrumb;
