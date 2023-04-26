import styles from './home.module.scss';
import classNames from 'classnames/bind';
import MusicItem from './MusicItem';
import { data } from '../../data/Data';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Gift from './Gift/gift';

const cx = classNames.bind(styles);

function Home() {
    const { state } = useContext(AuthContext);

    return (
        <div className={cx('wrapper')}>
            {/* <div>title</div> */}
            <div className={cx('content')}>
                {state['isHeart']
                    ? data.map((item, index) => {
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
                    : state['isGift']
                    ? <Gift/>
                    : data.map((item, index) => {
                          return (
                              <MusicItem
                                  key={index}
                                  musicId={item.musicId}
                                  src={item.image}
                                  name={item.name}
                                  author={item.author}
                              />
                          );
                      })}
            </div>
        </div>
    );
}

export default Home;
