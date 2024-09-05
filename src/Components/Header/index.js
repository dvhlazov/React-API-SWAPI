import React from 'react';
import style from './Header.module.css';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>Logo</div>
            <nav className={style.navi}>
                <ul className={style.naviList}>
                    <li>Daily Digest</li>
                    <li>News</li>
                    <li>Media Content</li>
                    <li>Others</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;