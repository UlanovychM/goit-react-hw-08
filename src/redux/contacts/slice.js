import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';
import { initialStateContacts } from '../initialState';

const getActions = type =>
	isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialStateContacts,
	extraReducers: builder =>
		builder
			.addCase(fetchContacts.fulfilled, (state, actions) => {
				state.items = actions.payload;
			})
			.addCase(addContacts.fulfilled, (state, actions) => {
				state.items = [...state.items, actions.payload];
			})
			.addCase(deleteContacts.fulfilled, (state, actions) => {
				state.items = state.items.filter(
					item => item.id !== actions.payload.id
				);
			})
			.addMatcher(getActions('pending'), state => {
				state.isLoading = true;
			})
			.addMatcher(getActions('rejected'), (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addMatcher(getActions('fulfilled'), state => {
				state.isLoading = false;
				state.error = null;
			}),
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
