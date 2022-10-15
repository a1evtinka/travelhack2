import React from 'react';
import Logo from './Logo';

const Header = () => (
    <header style={{backgroundColor:'rgba(30, 14, 0, 0.36)'}}>
        <div className="fl">
            <button type="button">
                <img src="img/misc/user.png" alt="User Settings"/>
            </button>
        </div>

        <div className="fl">
            <Logo />
        </div>

        <div className="fl">
            <button type="button">
                <img src="img/misc/messages.png" alt="View Messages" />
            </button>
        </div>
    </header>
);

export default Header;
