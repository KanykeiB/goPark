import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import styles from './styles.module.css';
import { Link, useHistory } from 'react-router-dom';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import { useDispatch, useSelector } from 'react-redux';
// import authLoginOperations from '../../redux/thunk/thunk'

const SignupSchema = yup.object({
    username: yup.string()
        .required("Заполните поле"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
});

const SignIn = () => {
    const dispatch = useDispatch()
    const router = useHistory()
    const [visibility, setVisibility] = useState(false);
    // const { authLoginUser } = authLoginOperations
    const handleVisibility = () => {
        setVisibility(!visibility)
    }
    const {
        register,
        handleSubmit,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(SignupSchema)
        });
    const onSubmit = async (data) => {
        try {
            // await dispatch(authLoginUser(data))
            router.push('/')
            console.log(data)
        } catch (e) {
            console.log(e)
        }

    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerLabel}>Вход </div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("username")}
                        placeholder="Логин" />
                    {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                </div>
                <div className={styles.passwordWrap}>
                    <input
                        className={styles.inputForm}
                        {...register("password")}
                        placeholder="Пароль"
                        type={visibility ? 'text' : 'password'} />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                    <RemoveRedEyeSharpIcon
                        className={visibility ? styles.eyeNotVisible : styles.eyeVisible}
                        onClick={handleVisibility}
                    />
                    <VisibilityOffSharpIcon
                        className={visibility ? styles.eyeVisible : styles.eyeNotVisible}
                        onClick={handleVisibility}
                    />

                </div>
                <div  className={styles.bottomText}>
                    <p>
                        Еще не зарегистрированы?
                    </p>
                    <p>
                        <Link to='/sign-up'>Создать аккаунт</Link>
                    </p>
                </div>


                <button
                    type="submit"
                    className={styles.submitButton}
                >Войти</button>
                <div className={styles.cancelButton}>
                    <Link to="/">Отмена</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;