import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

function NavbarItem({children, text}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx("icon")}>
                {children}
            </div>
            <span className={cx("text")}>{text}</span>
        </div>
     );
}

export default NavbarItem;