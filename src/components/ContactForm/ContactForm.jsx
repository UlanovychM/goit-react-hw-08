import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contactsOps';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';
import { selectContacts } from '../../redux/selectors';

const ContactForm = () => {
	const dispatch = useDispatch();

	const contacts = useSelector(selectContacts);

	const handleSubmit = e => {
		e.preventDefault();
		const contact = {
			id: nanoid(),
			name: e.currentTarget.elements.name.value,
			number: e.currentTarget.elements.number.value,
		};

		const checkContact = contacts.find(
			({ name }) => name.toLowerCase() === contact.name.toLowerCase()
		);

		if (checkContact) {
			return toast.warn(`${contact.name} is already in contacts.`);
		}

		dispatch(addContacts(contact));
		e.currentTarget.reset();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Label htmlFor={nanoid()}>
				Name
				<Input
					type='text'
					name='name'
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					id={nanoid()}
					required
				/>
			</Label>
			<Label htmlFor={nanoid()}>
				Number
				<Input
					type='tel'
					name='number'
					pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
					title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
					id={nanoid()}
					required
				/>
			</Label>
			<SubmitButton type='submit'>Add contact</SubmitButton>
		</Form>
	);
};

export default ContactForm;
