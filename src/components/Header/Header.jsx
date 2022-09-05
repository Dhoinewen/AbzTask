import React from 'react';
import s from './Header.module.scss'
import MyBtn from "../UI/Button/MyBtn";

const Header = ({postRef, listRef}) => {

    const handleClick = (nav) => {
        if (nav === 'Users')
            listRef.current?.scrollIntoView({behavior: 'smooth'});
        if (nav === 'Sign Up') postRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <header>
            <img src={require('../../media/Logo.svg').default} alt='logo'/>
            <div className={s.buttonBox}>
                <MyBtn text={"Users"} active={false} func={handleClick}/>
                <MyBtn text={"Sign Up"} active={false} func={handleClick}/>
            </div>
        </header>
    );
};

export default Header;