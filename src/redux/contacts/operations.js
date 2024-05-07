import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts');
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addContacts = createAsyncThunk(
	'tasks/addContact',
	async ({ name, number }, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { name, number });
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteContacts = createAsyncThunk(
	'tasks/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const updateContact = createAsyncThunk(
	'contacts/updateContact',
	async (updateData, thunkAPI) => {
		try {
			const response = await axios.patch(
				`/contacts/${updateData.id}`,
				updateData.values
			);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
