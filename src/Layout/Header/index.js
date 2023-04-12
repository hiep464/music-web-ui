import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';


const cx = classNames.bind(styles);

function Header() {
    return <div className={cx("wrapper")}>
        <SlArrowLeft className={cx("left")}/>
        <SlArrowRight className={cx("right")}/>
    </div>;
}

export default Header;
