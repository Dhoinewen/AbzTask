import React, {useEffect, useState} from 'react';
import s from './Registration.module.scss'
import Input from "../UI/Input/Input";
import axios from "axios";
import RadioInput from "../UI/RadioInput/RadioInput";
import MyBtn from "../UI/Button/MyBtn";

const Registration = () => {

    const [selectedPosition, setSelectedPosition] = useState(0)
    const [positions, setPositions] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [numberDirty, setNumberDirty] = useState(false)
    const [nameError, setNameError] = useState('Error')
    const [emailError, setEmailError] = useState('Error')
    const [numberError, setNumberError] = useState('Error')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        const URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
        axios.get(URL)
            .then(response => {
                setPositions(response.data.positions)
            })
            .finally(() => setIsLoading(false))
    }, [isLoading])


    useEffect(() => {
        if (nameError || emailError || numberError || selectedPosition === 0) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, selectedPosition, number])


    const nameHandler = (e) => {
        setName(e.target.value)
        const re = /^.{2,60}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('from 2 to 60 symbols')
        } else {
            setNameError('')
        }
    }

    const inputBorderColor = (inputName) => {
        if (inputName) {
            return 'red'
        } else {
            return '#D0CFCF'
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Not Valid email')
        } else {
            setEmailError('')
        }
    }

    const numberHandler = (e) => {
        setNumber(e.target.value)
        const re = /^\+*380*[0-9]{9}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNumberError('Not Valid number')
        } else {
            setNumberError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'number':
                setNumberDirty(true)
                break
        }
    }


    const clickButton = () => {
        const Aboba = {
            name: name,
            email: email,
            number: number,
            position: selectedPosition
        }
        console.log(Aboba)
    }

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <div className={s.registrationBox}>
            <h1>Working with Post request</h1>
            <div className={s.inputsBox}>
                <Input type='text' placeholder='Name' blurHandler={blurHandler} name='name' value={name}
                       handler={nameHandler} errorBorderColor={inputBorderColor(nameError)}
                />
                {(nameDirty && nameError) && <div className={s.error}>{nameError}</div>}
                <Input type='text' placeholder='Email' blurHandler={blurHandler} name='email' value={email}
                       handler={emailHandler} errorBorderColor={inputBorderColor(emailError)}/>
                {(emailDirty && emailError) && <div className={s.error}>{emailError}</div>}
                <Input type='text' placeholder='Number' name='number' blurHandler={blurHandler} handler={numberHandler}
                       value={number} errorBorderColor={inputBorderColor(numberError)}/>
                {(numberDirty && numberError) && <div className={s.error}>{numberError}</div>}
                <RadioInput positions={positions} selectedPosition={selectedPosition}
                            setSelectedPosition={setSelectedPosition} />
                <MyBtn text='Sign Up' active={!formValid} type="submit" func={clickButton}/>
            </div>

        </div>
    );
};

export default Registration;