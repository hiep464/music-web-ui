import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { GiLoveSong } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';

import NavbarItem from './NavbarItem';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <GiLoveSong className={cx('header-icon')} />
                <span>Music</span>
            </div>
            <div className={cx('first-row')}>
                <NavbarItem text="Trang chủ">
                    <AiFillHome className={cx('icon')} />
                </NavbarItem>
                <NavbarItem text="Tìm kiếm">
                    <BsSearch className={cx('icon')} />
                </NavbarItem>
                <NavbarItem text="Thư viện">
                    <MdOutlineLibraryMusic className={cx('icon')} />
                </NavbarItem>
            </div>
            <div className={cx('second-row')}>
                <NavbarItem text="Tạo playlist">
                    <MdAdd className={cx('icon')} />
                </NavbarItem>
                <NavbarItem text="Bài hát đã thích">
                    <FcLike className={cx('icon')} />
                </NavbarItem>
            </div>
        </div>
    );
}

export default Navbar;
