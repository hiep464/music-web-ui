import styles from './login.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    // const [account, setAccount] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        // if(account === "hiep" && password === "hiep")
        navigate('/home');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('background')}>
                <img
                    className={cx('background-img')}
                    src={require('../../assets/images/background2.gif')}
                    alt="#"
                ></img>
            </div>
            <div className={cx('login-wrapper')}>
                <div className={cx('login')}>
                    <div className={cx('login-header')}>
                        <span>Login</span>
                    </div>
                    <div className={cx('login-item')}>
                        <span>Account: </span>
                        <input
                            type="text"
                            className={cx('login-input')}
                            // onChange={(e) => setAccount(e.target.value)}
                        ></input>
                    </div>
                    <div className={cx('login-item')}>
                        <span>Password: </span>
                        <input
                            type="password"
                            className={cx('login-input')}
                            // onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className={cx('notifi')}>
                        <span>No authentication, click Submit to view Website</span>
                    </div>
                    <button className={cx('login-submit')} onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
