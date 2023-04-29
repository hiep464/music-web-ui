import styles from './home.module.scss';
import classNames from 'classnames/bind';
import MusicItem from './MusicItem';
import { data, dataNormal } from '../../data/Data';
// import { dataNormal } from '../../data/Data';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Gift from './Gift/gift';

const cx = classNames.bind(styles);

const getData = (anh) =>{
    if(anh)
        return data
    else
        return dataNormal
}

function Home() {
    const { state } = useContext(AuthContext);
    
    const musics = getData(state['isAnh'])

    return (
        <div className={cx('wrapper')}>
            {/* <div>title</div> */}
            <div className={cx('content')}>
                {state['isHeart'] ? (
                    musics.map((item, index) => {
                        if (item.heart)
                            return (
                                <MusicItem
                                    key={index}
                                    musicId={item.musicId}
                                    src={item.image}
                                    name={item.name}
                                    author={item.author}
                                />
                            );
                        return null;
                    })
                ) : state['isGift'] ? (
                    <Gift />
                ) : (
                    musics.map((item, index) => {
                        if (!item.heart)
                            return (
                                <MusicItem
                                    key={index}
                                    musicId={item.musicId}
                                    src={item.image}
                                    name={item.name}
                                    author={item.author}
                                />
                            );
                    })
                )}
            </div>
        </div>
    );
}

export default Home;
