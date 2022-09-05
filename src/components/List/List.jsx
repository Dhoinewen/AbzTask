import React, {forwardRef, useEffect, useState} from 'react';
import s from './List.module.scss'
import ListItem from "../ListItem/ListItem";
import MyBtn from "../UI/Button/MyBtn";
import axios from "axios";

const List = forwardRef((props, ref) => {

    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        if (isLoading) {
            const URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=6`;
            axios.get(URL)
                .then(response => {
                    setUsersData([...usersData, ...response.data.users])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setIsLoading(false))
        }
    }, [isLoading])


    const clickMe = (e) => {
        e.preventDefault()
        setIsLoading(true)
    }

    return (
        isLoading ? <h1>Loading...</h1> :
            <div ref={ref} className={s.altBody}>
                <h1>Working with GET request</h1>
                <div className={s.usersBox}>
                    {usersData.map(user => <ListItem key={user.id} user={user}/>)}
                </div>
                <div className={s.buttonBox}>
                    <MyBtn active={false} text='Show More' func={clickMe}></MyBtn>
                </div>
            </div>
    );
});

export default List;