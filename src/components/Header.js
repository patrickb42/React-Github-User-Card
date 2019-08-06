import React, { Component } from 'react';

import githublogo from '../assets/githublogo.png';
import lambdalogo from '../assets/lambdalogo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={lambdalogo} alt="Lambda Logo" />
        <p><span role="img" aria-label="heart">❤️</span>'s</p>
        <img src={githublogo} alt="Github Logo" />
      </div>
    );
  }
}

export default Header;
