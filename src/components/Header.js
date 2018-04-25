import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
let logo = require('../styles/images/logo.png');

//used to inject header into page
const Header = () => {
    return (
        <nav className="header">
            <img src={logo} />
            <h1 className="leaderboardTitle">ANow Ping Pong</h1>
        </nav>
    );
};

export default Header;