import React from 'react';
import s from './Header.module.scss'
import MyBtn from "../UI/Button/MyBtn";

const Header = () => {
    return (
        <header>
            <img src={require('../../media/Logo.svg').default} alt='logo'/>
            <div className={s.buttonBox}>
                <MyBtn text={"Users"} active={true}/>
                <MyBtn text={"Sign Up"} active={false}/>
            </div>
        </header>
    );
};

export default Header;