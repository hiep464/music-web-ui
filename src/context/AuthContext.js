import React, { createContext } from 'react';

export const AuthContext = createContext({});

/**
 * This is a provider for AuthContext.
 * It will handle the login and logout process.
 * You can use it like this: <AuthContextProvider>...</AuthContextProvider> and then you can use the AuthContext in your component.
 * For example: const { state, login, logout } = useContext(AuthContext);
 * state is an object that contains userId, token, username, isLogin.
 * login is a function that will set the userId, token, username, isLogin to true and save it to localStorage.
 * logout is a function that will set the userId, token, username, isLogin to false and remove it from localStorage.
 */
export const AuthContextProvider = ({ children }) => {
    const [musicId, setMusicId] = React.useState(null);
    const [isPlay, setIsPlay] = React.useState(false);
    const [isHeart, setIsHeart] = React.useState(false);
    const [isGift, setIsGift] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(localStorage.getItem('isLogin'));
    const [isBupple, setIsBupple] = React.useState(false);
    const [isAnh, setIsAnh] = React.useState(false);
    const [musics, setMusics] = React.useState([]);
    const [indexList, setIndexList] = React.useState(false);
    const [userid, setUserid] = React.useState(localStorage.getItem('userid'));
    const musicNumber = 53;
    const normal = 2;

    const playMusic = (id, musics) => {
        setMusics(musics);
        setIsPlay(true);
        setMusicId(id);
    };
    const inGift = () => {
        setIsGift(true);
        setIsHeart(false);
    };

    const login = (userid) => {
        setIsLogin(true);
        setUserid(userid);
    };

    const addBupple = () => {
        setIsBupple(true);
    };

    const removeBupple = () => {
        setIsBupple(false);
    };

    const limited = () => {
        setIsAnh(true);
    };

    return (
        <AuthContext.Provider
            value={{
                state: {
                    musicId,
                    isPlay,
                    isHeart,
                    isGift,
                    isLogin,
                    isBupple,
                    musicNumber,
                    normal,
                    isAnh,
                    musics,
                    indexList,
                    userid,
                },
                playMusic,
                inGift,
                login,
                addBupple,
                removeBupple,
                limited,
                setMusics,
                setMusicId,
                setIndexList,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
