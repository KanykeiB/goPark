import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../containers/sign-in/signIn';
import SignUp from '../../containers/sign-up/signUp';
import styles from './styles.module.css';

const SignInPage = () => {
    return (
        <div>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.toggle_text}>
                        <div className={styles.toggle_login}><Link to='/sign-in'>Войти </Link></div>
                        <div className={styles.toggle_register}><Link to='/sign-up'> Регистрация</Link></div>
                    </div>
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-sm-2 text-center">
                                <input className={styles.checkbox} type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className={styles.card_3d_wrap}>
                                    <div className={styles.card_3d_wrapper}>
                                        <div className={styles.card_front}>
                                            <SignIn />
                                        </div>
                                        <div className={styles.card_back}>
                                            <SignUp />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
{/* <div> */}
{/* <div className={styles.toggle_text}>
    <div className={styles.toggle_login}><Link to='/sign-in'>Войти </Link></div>
    <div className={styles.toggle_register}><Link to='/sign-up'> Регистрация</Link></div>
</div> */}
{/* <div className={styles.section}>
    <div className={styles.container}>
        <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-sm-2 text-center">
                    <div className={styles.card_3d_wrap}>
                        <div className={styles.card_3d_wrapper}>
                            <div className={styles.card_back}>
                                <SignIn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}