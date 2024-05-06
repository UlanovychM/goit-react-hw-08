export const initialStateAuth = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
};

export const initialStateContacts = {
	items: [],
	isLoading: false,
	error: null,
};
