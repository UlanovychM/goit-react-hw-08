import { Helmet } from 'react-helmet-async';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container } from 'components/Container/Container.styled';

const ContactsPage = () => {
	return (
		<div>
			<Helmet>
				<title>Contacts</title>
			</Helmet>

			<ContactForm />
			<Container>
				<h2>Contacts list</h2>

				<Filter />

				<ContactList />
			</Container>
		</div>
	);
};

export default ContactsPage;
