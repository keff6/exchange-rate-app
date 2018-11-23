import React from 'react';
import { Col } from 'reactstrap';
import './layout.css';

const Layout = (props) => {
  return (
    <Col md={8} className="main-layout">
      {props.children}
    </Col>
  );
}

export default Layout;
