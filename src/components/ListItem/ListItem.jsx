import React from 'react';
import s from './ListItem.module.scss'

const ListItem = ({user}) => {



    return (
        <div className={s.userBox}>
            <img src={user.photo} alt={user.id}/>
            <div className={s.userName}>{user.name}</div>
            <div>{user.position}</div>
            <div className={s.userEmail}>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    );
};

export default ListItem;