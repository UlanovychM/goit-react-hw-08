import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Button, Text } from './UserMenu.styled';

const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	const handleLogOut = () => dispatch(logOut());
	return (
		<div>
			<div>
				<Text>Welcome, {user.name} </Text>
				<Text>{user.email}</Text>
			</div>
			<Button type='button' onClick={handleLogOut}>
				Logout
			</Button>
		</div>
	);
};

export default UserMenu;
