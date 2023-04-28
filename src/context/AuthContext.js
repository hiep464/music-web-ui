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
    const [isLogin, setIsLogin] = React.useState(false);
    const [isBupple, setIsBupple] = React.useState(false);
    const [isAnh, setIsAnh] = React.useState(false);
    const musicNumber = 55

    const playMusic = (id) => {
        setMusicId(id);
        setIsPlay(true);
    }

    const inHeartPage = () => {
        setIsHeart(true)
        setIsGift(true)
    }

    const inHomePage = () => {
        setIsHeart(false)
        setIsGift(false)
    }

    const inGift = () => {
        setIsGift(true)
        setIsHeart(false)
    }

    const login = () => {
        setIsLogin(true)
    }

    const addBupple = () => {
        setIsBupple(true)
    }

    const removeBupple = () => {
        setIsBupple(false)
    }

    const limited = () => {
        setIsAnh(true)
    }

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
                    isAnh
                },
                playMusic,
                inHeartPage,
                inHomePage,
                inGift,
                login,
                addBupple,
                removeBupple,
                limited
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
