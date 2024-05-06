import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsOps';
import { Button, Text } from './Contact.styled';

const Contact = ({ contact: { name, number, id } }) => {
	const dispatch = useDispatch();
	const handleDelete = id => dispatch(deleteContacts(id));
	return (
		<>
			<Text>{name}</Text>
			<Text>{number}</Text>

			<Button type='button' onClick={() => handleDelete(id)}>
				Delete
			</Button>
		</>
	);
};

export default Contact;

Contact.propTypes = {
	contact: PropTypes.object,
};
