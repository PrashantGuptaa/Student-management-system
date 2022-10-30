import Register from "../container/register";
import SignIn from "../container/signIn";
import Validator from "../HOC/validator";
import Home from './../container/Home';

const configRoutes = [
    {
        route: '/sign-in',
        component: SignIn
    },
    {
        route: '/register',
        component: Register
    },
    {
        route: '/',
        component: Validator(Home)
    }
]

export default configRoutes;