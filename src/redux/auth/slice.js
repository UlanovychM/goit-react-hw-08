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
			})
			.addCase(loginIn.fulfilled, (state, actions) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(loginOut.fulfilled, (state, actions) => {
				state.user = { name: null, email: null };
				state.token = null;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
			})
			.addMatcher(getActions('pending'), state => (state.isRefreshing = true))
			.addMatcher(getActions('rejected'), state => (state.isRefreshing = false))
			.addMatcher(getActions('fulfilled'), state => {
				state.isLoggedIn = true;
				state.isRefreshing = false;
			}),
});

export const authReducer = authSlice.reducer;
