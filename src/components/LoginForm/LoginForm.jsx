import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form, Input, Label, Button } from './LoginForm.styled';

const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			logIn({
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};

	return (
		<div>
			<Form onSubmit={handleSubmit} autoComplete='off'>
				<Label>
					Email
					<Input type='email' name='email' placeholder='Your Email' />
				</Label>
				<Label>
					Password
					<Input type='password' name='password' placeholder='Password' />
				</Label>
				<Button type='submit'>Log In</Button>
			</Form>
		</div>
	);
};

export default LoginForm;
