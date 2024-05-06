import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialStateAuth } from '../initialState';

import { loginIn, loginOut, refreshUser, registerUser } from './operations';

const getActions = type =>
	isAnyOf(loginIn[type], loginOut[type], refreshUser[type], registerUser[type]);

const authSlice = createSlice({
	name: 'auth',
	initialStateAuth,
	extraReducers: builder =>
		builder
			.addCase(registerUser.fulfilled, (state, actions) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(loginIn.fulfilled, (state, actions) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(loginOut.fulfilled, (state, actions) => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
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
