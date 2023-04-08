import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { GiLoveSong } from 'react-icons/gi';
import NavbarItem from './NavbarItem';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <GiLoveSong className={cx('header-icon')} />
                <span>Music</span>
            </div>
            <NavbarItem text="hi">
                <GiLoveSong/>
            </NavbarItem>
        </div>
    );
}

export default Navbar;
