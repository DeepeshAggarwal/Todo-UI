import HomePage from './../../components/HomePage/index'
import DashBoard from './../../components/Dashboard/index'
import Test from './../../Test';
import SignUp from './../../components/SignUp/index';
import SignIn from './../../components/SignIn/index';
import Validate from './../../components/Validate/index';

const routes = [
	{ path: '/', component: HomePage, exact: true },
	{ path: '/user/:userid', component: DashBoard, exact: true },
	{ path: '/test', component: Test, exact: true},
	{ path: '/signup', component: SignUp, exact: true},
	{ path: '/signin', component: SignIn, exact: true},
	{ path: '/validate', component: Validate, exact: true},
]

export default routes;