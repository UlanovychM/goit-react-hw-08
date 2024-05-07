import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
// import { Container } from 'components/Container/Container.styled';

const ContactsPage = () => {
	return (
		<div>
			<Helmet>
				<title>Contacts</title>
			</Helmet>

			<ContactForm />
			<div>
				<h2>Contacts list</h2>

				<Filter />

				<ContactList />
			</div>
		</div>
	);
};

export default ContactsPage;
