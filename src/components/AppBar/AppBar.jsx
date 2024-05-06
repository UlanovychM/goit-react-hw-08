import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';

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
