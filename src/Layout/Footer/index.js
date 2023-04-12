import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineHeart } from 'react-icons/ai';
import { RxMixerHorizontal } from 'react-icons/rx';
import { IoPlayBack, IoPlayForward } from 'react-icons/io5';
import { BsFillPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';
import { RiRepeatLine } from 'react-icons/ri';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { BiVolumeLow } from 'react-icons/bi';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ReactAudioPlayer from 'react-audio-player';
import { data } from '../../data/Data';

const cx = classNames.bind(styles);

const $ = document.querySelector.bind(document);

function Footer() {
    const [isPlay, setIsPlay] = useState(true);
    const [timeMusic, setTimeMusic] = useState('');
    const [curentTimeMusic, setCurentTimeMusic] = useState('0:00');
    const [progressValue, setProgressValue] = useState("0%");

    useEffect(() => {
        const progressValue1 = $("." + cx("progress-bar"));
        console.log(progressValue1.getBoundingClientRect());
    }, [])
    // progressValue.style.with = `50%`;


    const { state } = useContext(AuthContext);

    useEffect(() => {
        setIsPlay(true);
    }, [state['musicId']])

    const getMusic = () => {
        if (state['isPlay']) {
            return data[state['musicId'] - 1];
        }
        return null;
    };

    const Music = getMusic();

    const currentMusic = useRef();

    const handleTimeMusic = () => {
        const seconds = currentMusic.current.audioEl.current.duration;
        const minute = Math.floor(seconds / 60);
        const second = Math.floor(seconds % 60);
        if (second < 10) setTimeMusic(minute + ':0' + second);
        else setTimeMusic(minute + ':' + second);
    };

    const play = () => {
        if (state['isPlay']) {
            setIsPlay(true);
            setProgressValue("0%")
            currentMusic.current.audioEl.current.play();
        }
    };

    const curentTime = () => {
        if (state['isPlay']) {
            const secondsCurrent = currentMusic.current.audioEl.current.currentTime;
            const seconds = currentMusic.current.audioEl.current.duration;
            const minuteCurrent = Math.floor(secondsCurrent / 60);
            const secondCurrent = Math.floor(secondsCurrent % 60);
            const percentprogress = secondsCurrent/seconds * 100;
            setProgressValue(`${percentprogress}%`);
            if (secondCurrent < 10) setCurentTimeMusic(minuteCurrent + ':0' + secondCurrent);
            else setCurentTimeMusic(minuteCurrent + ':' + secondCurrent);
        }
    };

    const pause = () => {
        if (state['isPlay']) {
            setIsPlay(false);
            currentMusic.current.audioEl.current.pause();
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('column-1')}>
                <div className={cx('music-img')}>
                    <img src={state['musicId'] ? Music.image : null} alt="#"></img>
                </div>
                <div className={cx('music-info')}>
                    <div className={cx('music-info-name')}>
                        <span>{Music ? Music.name : ''}</span>
                    </div>
                    <div className={cx('music-info-author')}>
                        <span>{Music ? Music.author : ''}</span>
                    </div>
                </div>
                <div className={cx('music-heart')}>
                    <AiOutlineHeart />
                </div>
            </div>
            <div className={cx('column-2')}>
                <div className={cx('column-2-header')}>
                    <RxMixerHorizontal className={cx('icon')} />
                    <IoPlayBack className={cx('icon')} />
                    {!isPlay ? (
                        <BsFillPlayCircleFill onClick={play} className={cx('icon', 'icon-play')} />
                    ) : (
                        <BsPauseCircleFill onClick={pause} className={cx('icon', 'icon-play')} />
                    )}
                    <IoPlayForward className={cx('icon')} />
                    <RiRepeatLine className={cx('icon')} />
                </div>
                <div className={cx('column-2-body')}>
                    <span>{curentTimeMusic}</span>
                    <div className={cx('progress-bar-wraper')}>
                        <div className={cx('progress-bar')}>
                            <div style={{width : progressValue}} className={cx('progress-bar__value')}></div>
                        </div>
                    </div>
                    <span>{timeMusic}</span>
                </div>
            </div>
            <div className={cx('column-3')}>
                <HiOutlineQueueList className={cx('icon-m')} />
                <BiVolumeLow />
                <div className={cx('progress-bar-wraper-volumn')}>
                    <div className={cx('progress-bar')}>
                        <div className={cx('progress-bar__value')}></div>
                    </div>
                </div>
            </div>
            <ReactAudioPlayer
                ref={currentMusic}
                className={cx('hide')}
                src={state['musicId'] ? Music.audio : null}
                autoPlay
                controls
                onLoadedMetadata={handleTimeMusic}
                onListen={curentTime}
                listenInterval={1000}
            />
        </div>
    );
}

export default Footer;
