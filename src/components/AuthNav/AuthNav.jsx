import { NavLink } from 'react-router-dom';

const AuthNav = () => {
	return (
		<div>
			<NavLink to='/login'>
				<button>Log In</button>
			</NavLink>
			<NavLink to='/register'>
				<button>Register</button>
			</NavLink>
		</div>
	);
};

export default AuthNav;
