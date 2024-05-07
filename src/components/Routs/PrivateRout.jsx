import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
	const { isLoggedIn, isRefreshing } = useAuth();
	const redirect = !isLoggedIn && !isRefreshing;

	return redirect ? <Navigate to={redirectTo} /> : Component;
};
