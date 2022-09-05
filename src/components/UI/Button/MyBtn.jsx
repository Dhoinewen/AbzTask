import React from 'react';
import s from './MyBtn.module.scss'

const MyBtn = ({text, active, func, type, style}) => {

    return (
        <button  onClick={func} disabled={active} type={type} style={style}>
            {text}
        </button>
    );
};

export default MyBtn;