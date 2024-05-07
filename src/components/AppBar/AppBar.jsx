import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';

const AppBar = () => {
	const { isLoggedIn } = useAuth();

	return (
		<div>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</div>
	);
};

export default AppBar;
