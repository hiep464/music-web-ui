import styles from './login.module.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Login() {
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
                        <span>login <FaBeer/></span>
                    </div>
                    <input type="text"></input>
                    <Link to='/home'><button>Submit</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
