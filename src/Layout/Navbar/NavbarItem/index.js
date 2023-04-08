import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

function NavbarItem({children, text}) {
    return ( 
        <div className={cx('wrapper')}>
            {children}
            <span>{text}</span>
        </div>
     );
}

export default NavbarItem;