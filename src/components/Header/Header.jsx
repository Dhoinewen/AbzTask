import React from 'react';
import s from './Header.module.scss'
import MyBtn from "../UI/Button/MyBtn";

const Header = ({postRef, listRef}) => {

    const navToList = () => {
        listRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    const navToPost = () => {
        postRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <header>
            <img src={require('../../media/Logo.svg').default} alt='logo'/>
            <div className={s.buttonBox}>
                <MyBtn text={"Users"} active={false} func={navToList}/>
                <MyBtn text={"Sign Up"} active={false} func={navToPost}/>
            </div>
        </header>
    );
};

export default Header;