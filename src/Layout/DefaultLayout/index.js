import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { state } = useContext(AuthContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Navbar />
            </div>
            <div className={cx('right')}>
                <Header />
                <div className={cx('right-content')}>{children}</div>
            </div>
            {state['isPlay'] ? <Footer /> : ''}
        </div>
    );
}

export default DefaultLayout;
