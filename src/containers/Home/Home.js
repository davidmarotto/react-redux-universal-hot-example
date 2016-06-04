import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {

  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <h1> Hello World </h1>

          <Link to={'/operatorRegistration'}>Operator Registration</Link>

          <button onClick={() => console.log('Hello')}>Operator Registration</button>
        </div>
      </div>
    );
  }
}
