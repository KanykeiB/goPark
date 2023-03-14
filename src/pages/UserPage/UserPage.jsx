import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../redux/selectors/selectors';
import userOperations from '../../redux/thunk/thunk';
import styles from './styles.module.css';

const UserPage = () => {
    const userData = localStorage.getItem('user_data')
    const dataObj = JSON.parse(userData)
    const dispatch = useDispatch();
    const {getUserData} = userOperations;
    useEffect(() => {
        dispatch(userOperations.getUserData())
    }, [])
    return (
        <div>
            <div className={styles.userWelcome}>
                Добро пожаловать на Park.Go!
            </div>

            <div className={styles.userCard}>
                <p>Почта: {dataObj.email}</p>
                <p>ID: {dataObj.id}</p>
                <p>Баллы: {dataObj.point} pc</p>
            </div>

        </div>
    );
};

export default UserPage;