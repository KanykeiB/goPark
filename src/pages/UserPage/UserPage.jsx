import React from 'react';
import styles from './styles.module.css';

const UserPage = () => {
    return (
        <div>
            <div className={styles.userWelcome}>
                Добро пожаловать на наш веб-сайт!
            </div>
            <div className={styles.userCard}>
                <p> Валентина Вухова</p>
                <p>ID: 19230495</p>
                <p>Баллы: 980 pc</p>
            </div>

        </div>
    );
};

export default UserPage;