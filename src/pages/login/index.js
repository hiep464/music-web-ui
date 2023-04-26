import styles from './login.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/images/icon.png';
import background from '../../assets/images/background.jpg';
import { TypeAnimation } from 'react-type-animation';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AiFillHeart } from 'react-icons/ai'
import { ImSad2 } from 'react-icons/im'

const cx = classNames.bind(styles);

function Login() {
    const [code, setCode] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleSubmit = () => {
        if(code === "do ngoc anh"){
            navigate('/home');
            login();
        }else
            setError(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('background')}>
                <img
                    className={cx('background-img')}
                    src={background}
                    alt="#"
                ></img>
            </div>
            <div className={cx('login-wrapper')}>
                <div className={cx('login')}>
                    <div className={cx('login-header')}>
                        <img className={cx('tuy-luyp-icon')} src={icon} alt="#"></img>
                    </div>
                    <div className={cx('login-header-text')}>
                        <TypeAnimation
                            sequence={[
                                'Cậu có phải là người giữ trái tim của tớ khum ?',
                                1000,
                                // () => {
                                //     console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                // },
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            style={{ fontSize: '24px', display: 'inline-block', textAlign: 'center', color: '#c58ade', marginLeft: '4px'}}
                        />
                    </div>
                    <div className={cx('login-item')}>
                        <input
                            type="password"
                            className={cx('login-input')}
                            onChange={(e) => setCode(e.target.value)}
                        ></input>
                        {
                            error ? 
                            <div className={cx('error-noti-wrapper')}>
                                <ImSad2 className={cx('error-icon')}/>
                            </div>
                            :
                            ''
                        }
                    </div>
                    <button className={cx('login-submit')} onClick={handleSubmit}>
                        <AiFillHeart  className={cx('icon')}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
