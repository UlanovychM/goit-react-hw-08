import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

const RegisterPage = () => {
	return (
		<div>
			<p>Oops! Not Found!</p>
			<Link to='/'>
				<p>Back to Home Page</p>
			</Link>
		</div>
	);
};

export default RegisterPage;
