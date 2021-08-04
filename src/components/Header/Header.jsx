import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="header">
                    <div className="header__left">
                        <div className="header__info">
                            <div>Logo</div>
                            <div>время доставки полчаса</div>
                            <div>телефон номер</div>
                        </div>
                        <div className="header__items"></div>
                    </div>
                    <div className="header__right">
                        <div className="header__buttons">
                            <button>add product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;