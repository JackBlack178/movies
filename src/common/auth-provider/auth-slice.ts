import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { rootReducer } from '../../store/redux'

interface User {
	name: string
	login: string
	email: string
	id: string
}

type UserState = {
	user: User | null
}

const initialState: UserState = {
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		isLogined: (state: UserState) => !!state.user,
		login: (state: UserState) => state.user?.login,
		all: (state: UserState) => state.user,
	},
	reducers: {
		logIn: (state: UserState, action: PayloadAction<User>) => {
			state.user = action.payload
		},

		logOut: (state: UserState) => {
			state.user = null
		},
	},
}).injectInto(rootReducer)
