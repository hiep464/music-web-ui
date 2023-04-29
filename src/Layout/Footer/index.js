import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineHeart } from 'react-icons/ai';
import { RxMixerHorizontal } from 'react-icons/rx';
import { IoPlayBack, IoPlayForward } from 'react-icons/io5';
import { BsFillPlayCircleFill, BsPauseCircleFill, BsFillHeartFill, BsFillBalloonFill } from 'react-icons/bs';
import { RiRepeatLine } from 'react-icons/ri';
import { BiVolumeLow } from 'react-icons/bi';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ReactAudioPlayer from 'react-audio-player';
import { data, dataNormal } from '../../data/Data';
import Bupple from './Bupple';

const cx = classNames.bind(styles);

const $ = document.querySelector.bind(document);

const getData = (anh) =>{
    if(anh)
        return data
    else
        return dataNormal
}

function Footer() {
    const [isPlay, setIsPlay] = useState(true);
    const [timeMusic, setTimeMusic] = useState('');
    const [curentTimeMusic, setCurentTimeMusic] = useState('0:00');
    const [progressValue, setProgressValue] = useState('0%');
    const [progressVolume, setProgressVolume] = useState(1.0);
    const [isheart, setIsheart] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [Music, setMusic] = useState(null);
    const [isRandom, setIsRandom] = useState(null);

    const { state, playMusic, addBupple, removeBupple } = useContext(AuthContext);
    const { musicId } = state;
    const musics = getData(state['isAnh'])

    useEffect(() => {
        const progressValue1 = $('.' + cx('progress-bar'));
        progressValue1.addEventListener('click', (e) => {
            const rect = progressValue1.getBoundingClientRect();
            const percentProgress = parseFloat(((e.pageX - rect.left) / progressValue1.offsetWidth) * 100);
            const seconds = currentMusic.current.audioEl.current.duration;
            currentMusic.current.audioEl.current.currentTime = (percentProgress * seconds) / 100;
            setProgressValue(`${percentProgress}%`);
        });
        const progressVolume1 = $('.' + cx('progress-bar-volume'));
        progressVolume1.addEventListener('click', (e) => {
            const rect = progressVolume1.getBoundingClientRect();
            const percentProgress = parseFloat((e.pageX - rect.left) / progressVolume1.offsetWidth);
            setProgressVolume(percentProgress);
        });
    }, []);

    useEffect(() => {
        setIsPlay(true);
        setIsheart(musics[state['musicId'] - 1]?.heart);
        setMusic(musics[state['musicId'] - 1]);
    }, [musicId]);

    const currentMusic = useRef();

    const handleTimeMusic = useCallback(() => {
        const seconds = currentMusic.current.audioEl.current.duration;
        const minute = Math.floor(seconds / 60);
        const second = Math.floor(seconds % 60);
        if (second < 10) setTimeMusic(minute + ':0' + second);
        else setTimeMusic(minute + ':' + second);
    }, []);

    const play = useCallback(() => {
        if (state['isPlay']) {
            setIsPlay(true);
            setProgressValue('0%');
            currentMusic.current.audioEl.current.play();
        }
    }, []);

    const curentTime = useCallback(() => {
        if (state['isPlay']) {
            const secondsCurrent = currentMusic.current.audioEl.current.currentTime;
            const seconds = currentMusic.current.audioEl.current.duration;
            const minuteCurrent = Math.floor(secondsCurrent / 60);
            const secondCurrent = Math.floor(secondsCurrent % 60);
            const percentprogress = (secondsCurrent / seconds) * 100;
            setProgressValue(`${percentprogress}%`);
            if (secondCurrent < 10) setCurentTimeMusic(minuteCurrent + ':0' + secondCurrent);
            else setCurentTimeMusic(minuteCurrent + ':' + secondCurrent);
        }
    }, []);

    const pause = useCallback(() => {
        if (state['isPlay']) {
            setIsPlay(false);
            currentMusic.current.audioEl.current.pause();
        }
    });

    const handleAddHeart = () => {
        Music.heart = true;
        setIsheart(true);
    };

    const handleRemoveHeart = () => {
        Music.heart = false;
        setIsheart(false);
    };

    const next = () => {
        if(state['isAnh']){
            if (state['musicId'] < state['musicNumber']) state['musicId'] = state['musicId'] + 1;
            else state['musicId'] = 1;
        }else{
            if (state['musicId'] < state['normal']) state['musicId'] = state['musicId'] + 1;
            else state['musicId'] = 1;
        }
    };

    const prev = () => {
        if(state['isAnh']){
            if (state['musicId'] > 1) state['musicId'] = state['musicId'] - 1;
            else state['musicId'] = state['musicNumber'];
        }else{
            if (state['musicId'] > 1) state['musicId'] = state['musicId'] - 1;
            else state['musicId'] = state['normal'];
        }
    };

    const autoPlay = () => {
        if(state['isAnh']){
            if (isRandom) {
                const random = Math.floor(Math.random() * state['musicNumber']) + 1;
                playMusic(random)
            }
            else if (musicId < state['musicNumber']) playMusic(musicId + 1);
            else playMusic(1);
        }
        else
        {
            if (isRandom) {
                const random = Math.floor(Math.random() * state['normal']) + 1;
                playMusic(random)
            }
            else if (musicId < state['normal']) playMusic(musicId + 1);
            else playMusic(1);
        }
    };

    const handleRepeat = () => {
        if (isRepeat) setIsRepeat(false);
        else setIsRepeat(true);
    };

    const repeatMusic = () => {
        currentMusic.current.audioEl.current.play();
    };

    const handleBupple = () => {
        if (state['isBupple']) removeBupple();
        else addBupple();
    };

    const handleRandom = () => {
        if(isRandom)
            setIsRandom(false)
        else
            setIsRandom(true)
    }

    return (
        <div className={cx('wrapper')}>
            {state['isBupple'] ? <Bupple /> : ''}
            <div className={cx('column-1')}>
                <div className={cx('music-img')}>
                    <img src={state['isPlay'] ? Music?.image : null} alt="#"></img>
                </div>
                <div className={cx('music-info')}>
                    <div className={cx('music-info-name')}>
                        <span>{Music ? Music?.name : ''}</span>
                    </div>
                    <div className={cx('music-info-author')}>
                        <span>{Music ? Music?.author : ''}</span>
                    </div>
                </div>
                <div className={cx('music-heart')}>
                    {isheart ? (
                        <BsFillHeartFill className={cx('music-heart-icon')} onClick={handleRemoveHeart} />
                    ) : (
                        <AiOutlineHeart className={cx('music-heart-icon-outline')} onClick={handleAddHeart} />
                    )}
                </div>
            </div>
            <div className={cx('column-2')}>
                <div className={cx('column-2-header')}>
                    <RxMixerHorizontal className={cx('icon', isRandom ? 'random' : '')} onClick={handleRandom}/>
                    <IoPlayBack className={cx('icon', 'icon-prev')} onClick={prev} />
                    {!isPlay ? (
                        <BsFillPlayCircleFill onClick={play} className={cx('icon', 'icon-play')} />
                    ) : (
                        <BsPauseCircleFill onClick={pause} className={cx('icon', 'icon-play')} />
                    )}
                    <IoPlayForward className={cx('icon', 'icon-next')} onClick={next} />
                    <RiRepeatLine
                        className={cx('icon', 'icon-repeat', isRepeat ? 'repeat' : '')}
                        onClick={handleRepeat}
                    />
                </div>
                <div className={cx('column-2-body')}>
                    <span>{curentTimeMusic}</span>
                    <div className={cx('progress-bar-wraper')}>
                        <div className={cx('progress-bar')}>
                            <div style={{ width: progressValue }} className={cx('progress-bar__value')}></div>
                        </div>
                    </div>
                    <span>{timeMusic}</span>
                </div>
            </div>
            <div className={cx('column-3')}>
                <BsFillBalloonFill className={cx('icon-m', state['isBupple'] ? 'bupple' : '')} onClick={handleBupple} />
                <BiVolumeLow className={cx('icon-s')} />
                <div className={cx('progress-bar-wraper-volume')}>
                    <div className={cx('progress-bar-volume')}>
                        <div style={{ width: `${progressVolume * 100}%` }} className={cx('progress-bar__value')}></div>
                    </div>
                </div>
            </div>
            <ReactAudioPlayer
                ref={currentMusic}
                className={cx('hide')}
                id="audio-player"
                // src={state['musicId'] ? Music?.audio : null}
                src={Music?.audio}
                autoPlay
                controls
                onLoadedMetadata={handleTimeMusic}
                onListen={curentTime}
                listenInterval={1000}
                volume={progressVolume}
                onEnded={isRepeat ? repeatMusic : autoPlay}
            />
        </div>
    );
}

export default Footer;
