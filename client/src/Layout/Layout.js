import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import './layout.css';

const Layout = (props) => {
  return (
    <Col md={8} className="main-layout">
      {props.children}
    </Col>
  );
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;
