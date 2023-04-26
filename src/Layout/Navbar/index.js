import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { GiLoveSong } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BsToggleOff, BsToggleOn, BsFillGiftFill } from 'react-icons/bs';
import { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import icon from '../../assets/images/gift.png'
import icon1 from '../../assets/images/giftAnimation.gif'

import NavbarItem from './NavbarItem';

const cx = classNames.bind(styles);

// document.body.classList.toggle('colorful');

function Navbar() {
    const { inHeartPage, inHomePage, inGift } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(false);

    const addDarkMode = useCallback(() => {
        document.body.classList.toggle('dark-mode');
        setDarkMode(true);
    })

    const removeDarkMode = useCallback(() => {
        document.body.classList.toggle('dark-mode');
        setDarkMode(false);
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <GiLoveSong className={cx('header-icon')} />
                <span>Music</span>
            </div>
            <div className={cx('first-row')}>
                <div onClick={inHomePage}>
                    <NavbarItem text="Trang chủ">
                        <AiFillHome className={cx('icon')} />
                    </NavbarItem>
                </div>
                <NavbarItem disable text="Tìm kiếm">
                    <BsSearch className={cx('icon', 'disable')} />
                </NavbarItem>
                <NavbarItem disable text="Thư viện">
                    <MdOutlineLibraryMusic className={cx('icon', 'disable')} />
                </NavbarItem>
            </div>
            <div className={cx('second-row')}>
                <NavbarItem disable text="Tạo playlist">
                    <MdAdd className={cx('icon', 'disable')} />
                </NavbarItem>
                <div onClick={inHeartPage}>
                    <NavbarItem text="Bài hát đã thích">
                        <FcLike className={cx('icon')} />
                    </NavbarItem>
                </div>

                <NavbarItem text="Dark mode">
                    {darkMode ? (
                        <BsToggleOn className={cx('icon')} onClick={removeDarkMode} />
                    ) : (
                        <BsToggleOff className={cx('icon')} onClick={addDarkMode} />
                    )}
                </NavbarItem>
            </div>
            <div className={cx('third-row')} onClick={inGift}>
                <div className={cx('gift-wrapper')}>
                    {/* <BsFillGiftFill className={cx('icon')} /> */}
                    <img className={cx('icon-animation')} src={icon1}></img>
                    <img src={icon} className={cx('icon-gift')}></img>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
