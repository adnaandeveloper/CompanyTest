import React, { useState } from 'react';
import { Breadcrumb, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';

const StyledBreadcrumb = (props) => {
  let navigate = useNavigate();
  const pathnames = props.breadCrumbs.pathname.split('/');
  const [backPathIndex, setBackPathIndex] = useState(pathnames.length);

  const homepath = pathnames.map(
    (item, index) =>
      index === 0 && (
        <div key={index} style={{ marginRight: 5 }}>
          {props.homePath}
        </div>
      )
  );
  const homePathWithArrow = props.showArrow ? (
    <div
      onClick={navigate('/')}
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <ArrowLeftOutlined style={{ marginRight: '4px' }} /> {homepath}
    </div>
  ) : (
    <div style={{ cursor: 'pointer' }} onClick={navigate('/')}>
      {homepath}
    </div>
  );
  const lastPath = pathnames.map(
    (item, index, arr) =>
      arr.length - 1 === index && (
        <div>
          <ArrowLeftOutlined
            key={index}
            onClick={() => {
              props.onBack(pathnames, backPathIndex);
              setBackPathIndex(backPathIndex - 1);
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
            <BreadcrumbItem key={index} style={{ marginRight: '2px' }}>
              {homePathWithArrow}
            </BreadcrumbItem>
          ) : item.length > 0 && arr.length - 1 === index ? (
            <Col span={24} style={{ marginTop: -8 }}>
              <BreadcrumbItem
                key={index}
                style={{ display: 'flex', flexDirection: 'row ' }}
              >
                <div style={{ fontWeight: '799' }}>{lastPath}</div>
              </BreadcrumbItem>
            </Col>
          ) : (
            <BreadcrumbItem
              style={{ cursor: 'pointer' }}
              onClick={() => props.onBack(pathnames, backPathIndex)}
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
