import React from 'react';
import s from './MyBtn.module.scss'

const MyBtn = ({text, active, func, type}) => {

    return (
        <button  onClick={func} disabled={active} type={type}>
            {text}
        </button>
    );
};

export default MyBtn;