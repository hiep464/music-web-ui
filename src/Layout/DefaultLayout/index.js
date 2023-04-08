import styles from './styles.module.scss'
import classNames from 'classnames/bind';
import Navbar from '../Navbar'
import Header from '../Header'

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Navbar/>
            </div>
            <div className={cx('right')}>
                <Header/>
                <div className={cx('right-content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;
