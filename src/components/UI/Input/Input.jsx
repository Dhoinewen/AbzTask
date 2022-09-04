import React from 'react';
import s from './Input.module.scss'

const Input = ({value, name, type, placeholder, blurHandler, handler, errorInData}) => {
    return (
        <div className={!errorInData ? s.inputBox : s.error}>
            <input onBlur={e => blurHandler(e)} value={value} name={name} type={type} placeholder={placeholder}
                   onChange={e => handler(e)}/>
        </div>
    );
};

export default Input;