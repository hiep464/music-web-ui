import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const cx = classNames.bind(styles);
// require('../../../assets/images/background.jpg')
function MusicItem({ musicId, src, name, author }) {
    const { playMusic } = useContext(AuthContext);

    const handlePlay = () => {
        playMusic(musicId);
    };

    return (
        <button className={cx('wrapper')} onClick={handlePlay}>
            <div className={cx('display')}>
                <BsFillPlayCircleFill className={cx('display-icon')} />
            </div>
            <div className={cx('content')}>
                <div>
                    <img className={cx('image')} src={src} alt="#"></img>
                </div>
                <div className={cx('name')}>{name}</div>
                <div className={cx('author')}>{author}</div>
            </div>
        </button>
    );
}

export default MusicItem;
