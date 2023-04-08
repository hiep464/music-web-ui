import DefaultLayout from "../Layout/DefaultLayout"
import Home from "../pages/home"
import Login from "../pages/login"
import Profile from "../pages/profile"

export const publicRoutes = [
    {path: '/', element : Login},
    {path: '/home', element : Home, layout : DefaultLayout},
    {path: '/profile', element : Profile}
]