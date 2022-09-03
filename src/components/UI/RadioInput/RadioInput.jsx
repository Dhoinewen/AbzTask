import React, {useEffect, useState} from 'react';
import s from './RadioInput.module.scss'

const RadioInput = ({positions, selectedPosition, setSelectedPosition}) => {


    useEffect(() => {
        console.log('Selected Position', typeof selectedPosition, selectedPosition)
    }, [selectedPosition])

    function onChangeValue(e) {
        const target = e.target;
        if (target.checked) {
            setSelectedPosition(parseInt(target.value))
        }
    }

    return (
        <form className={s.radioInput}>
            <p>Select your position</p>
            <div>
                {positions.map(position =>
                    <div className={s.myInput} key={position.id}>
                        <label htmlFor={position.id}>
                        <input
                            type="radio"
                            defaultValue={position.id}
                            checked={position.id === selectedPosition}
                            onChange={onChangeValue}
                        />
                            {position.name}
                        </label>
                    </div>
                )}
            </div>
        </form>
    );
};

export default RadioInput;