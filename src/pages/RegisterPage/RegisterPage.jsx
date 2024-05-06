import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './NotFound.module.css';

const RegisterPage = () => {
	return (
		<div>
			<Helmet>
				<title>Registration</title>
			</Helmet>

			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
