import React from 'react';
import Logo from './Logo';

const Header = () => (
    <header>
        <div className="fl">
            <button type="button">
                <img src="img/misc/user.png" alt="User Settings" />
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
