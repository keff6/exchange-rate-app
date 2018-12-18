import React from 'react';
import {withRouter } from 'react-router-dom'
import NavBar from './Navigation/NavBar';
import './App.css';
import Router from './Routing/Router';
import Layout from './Layout/Layout';

const App = () => (
  <div className="App">
    <NavBar />
    <Layout>
      <Router />  
    </Layout>             
  </div>
);

export default withRouter(App);
