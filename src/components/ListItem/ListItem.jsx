import React from 'react';
import s from './ListItem.module.scss'

const ListItem = ({user}) => {

    const stringLenght = (str) => {
        if (str.length < 20 ) {
            return str
        } else {
            return str.slice(0, 20) + '...'
        }
    }

    return (
        <div className={s.userBox}>
            <img src={user.photo} alt={user.id}/>
            <div className={user.name.length < 20? s.userName : s.overflowUserName}>{stringLenght(user.name)}</div>
            <div className={s.fullUserName}>{user.name}</div>
            <div className={s.userPosition}>{user.position}</div>
            <div className={user.email.length < 20 ? s.userEmail : s.overflowUserEmail}>{stringLenght(user.email)}</div>
            <div className={s.fullEmail}>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    );
};

export default ListItem;