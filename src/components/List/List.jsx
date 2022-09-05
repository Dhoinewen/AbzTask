import React, {forwardRef, useEffect, useState} from 'react';
import s from './List.module.scss'
import ListItem from "../ListItem/ListItem";
import MyBtn from "../UI/Button/MyBtn";
import axios from "axios";

const List = forwardRef(({addNewUser, setAddNewUser, setIsLoading, isLoading}, ref) => {


    const [currentPage, setCurrentPage] = useState(1)
    const [usersData, setUsersData] = useState([])
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        if (addNewUser) {
            setUsersData([])
            setCurrentPage(1)
            setIsLoading(true)
            setAddNewUser(false)
        }
    }, [addNewUser])

    useEffect(() => {
        if (isLoading) {
            const URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=6`;
            axios.get(URL)
                .then(response => {
                    setUsersData([...usersData, ...response.data.users])
                    setCurrentPage(prevState => prevState + 1)
                    setTotalPage(response.data.total_pages)
                })
                .finally(() => setIsLoading(false))
        }
    }, [isLoading])


    const moreUsers = (e) => {
        e.preventDefault()
        setIsLoading(true)
    }

    return (
        isLoading ? <h1>Loading...</h1> :
            <div className={s.altBody}>
                <h1  ref={ref}>Working with GET request</h1>
                <div className={s.usersBox}>
                    {usersData.map(user => <ListItem key={user.id} user={user}/>)}
                </div>
                <div className={s.buttonBox}>
                    <MyBtn active={false} text='Show More' func={moreUsers}
                           style={currentPage === totalPage ? {"display": "none"} : undefined}></MyBtn>
                </div>
            </div>
    );
});

export default List;