import React from 'react';
import s from './Input.module.scss'

const Input = ({value, name, type, placeholder, blurHandler, handler, errorBorderColor}) => {
    return (
        <div className={s.inputBox}>
            <input onBlur={e => blurHandler(e)} value={value} name={name} type={type} placeholder={placeholder}
                   onChange={e => handler(e)} style={{'borderColor': errorBorderColor}}/>
        </div>
    );
};

export default Input;