import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/operations';
import { Form, Label, Button, Input } from './RegisterForm.styled';

export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};

	return (
		<div>
			<Form onSubmit={handleSubmit} autoComplete='off'>
				<h1 style={{ textAlign: 'center' }}>Create Account</h1>
				<Label>
					User name
					<Input type='text' name='name' placeholder='John Dereck' />
				</Label>
				<Label>
					Email
					<Input type='email' name='email' placeholder='example@gmail.com' />
				</Label>
				<Label>
					Password
					<Input type='password' name='password' placeholder='*******' />
				</Label>
				<Button type='submit'>Create</Button>
			</Form>
		</div>
	);
};
