import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
	'auth/register',
	async (users, thunkAPI) => {
		try {
			const response = await axios.get('/user/signup', users);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const loginIn = createAsyncThunk(
	'auth/login',
	async (login, thunkAPI) => {
		try {
			const response = await axios.post('/user/login', login);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const loginOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await axios.post('/users/logout');
		clearAuthHeader();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.token;

		if (persistedToken === null) {
			return thunkAPI.rejectWithValue('Unable to fetch user');
		}
		try {
			setAuthHeader(persistedToken);
			const res = await axios.get('/users/current');
			return res.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
