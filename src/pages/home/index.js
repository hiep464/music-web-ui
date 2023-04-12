import styles from './home.module.scss';
import classNames from 'classnames/bind';
import MusicItem from './MusicItem';
import { data } from '../../data/Data';

const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx('wrapper')}>
            {/* <div>title</div> */}
            <div className={cx('content')}>
                {data.map((item, index) => {
                    return <MusicItem key={index} musicId={item.musicId} src={item.image} name={item.name} author={item.author}/>
                })}
            </div>
        </div>
    );
}

export default Home;
