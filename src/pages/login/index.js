import styles from './login.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/images/icon.png';
import { TypeAnimation } from 'react-type-animation';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const cx = classNames.bind(styles);

function Login() {
    const [code, setCode] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleSubmit = () => {
        if(code === "abcxyz"){
            navigate('/home');
            login();
        }
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
                        {/* <span>Login</span> */}
                        <img className={cx('tuy-luyp-icon')} src={icon} alt="#"></img>
                        {/* <span className={cx('type')}>Để xác minh người iu tớ thì cậu cần có mã code</span> */}
                    </div>
                    <div>
                        <TypeAnimation
                            sequence={[
                                'Hi',
                                1000,
                                // () => {
                                //     console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                // },
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            style={{ fontSize: '24px', display: 'inline-block', textAlign: 'center'}}
                        />
                    </div>
                    <div className={cx('login-item')}>
                        {/* <span>Code: </span> */}
                        <input
                            type="password"
                            className={cx('login-input')}
                            onChange={(e) => setCode(e.target.value)}
                        ></input>
                    </div>
                    {/* <div className={cx('login-item')}>
                        <span>Password: </span>
                        <input
                            type="password"
                            className={cx('login-input')}
                            // onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div> */}
                    <button className={cx('login-submit')} onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
