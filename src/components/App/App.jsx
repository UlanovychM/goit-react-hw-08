import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { RestrictedRoute } from '../Routs/RestrictedRoute';
import { PrivateRout } from '../Routs/PrivateRout';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../../layout/Layout';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
	import('../../pages/ContactsPage/ContactsPage')
);
const RegisterPage = lazy(() =>
	import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<Loader />
	) : (
		<Layout>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route
					path='/contacts'
					element={
						<PrivateRout component={<ContactsPage />} redirectTo='/login' />
					}
				/>
				<Route
					path='/login'
					element={
						<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />
					}
				/>
				<Route
					path='/register'
					element={
						<RestrictedRoute
							component={<RegisterPage />}
							redirectTo='/contacts'
						/>
					}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
