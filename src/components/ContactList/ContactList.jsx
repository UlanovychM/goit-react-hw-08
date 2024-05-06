import Contact from '../Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectError,
	selectFilteredContacts,
	selectIsLoading,
} from '../../redux/contacts/selectors';

import { fetchContacts } from '../../redux/contacts/operations';

const ContactList = () => {
	const contacts = useSelector(selectFilteredContacts);
	const loading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			{!contacts.length && !error && !loading && <p>No contacts found.</p>}
			{error && <p>{error}</p>}
			{loading && <p>{loading}</p>}
			<ul>
				{contacts.map(contact => (
					<li key={contact.id}>
						<Contact contact={contact} />
					</li>
				))}
			</ul>
		</>
	);
};

export default ContactList;
