import { AppDispatch } from '../../store/redux'
import { authSlice } from './auth-slice'

export const logIn = (dispatch: AppDispatch) => {
	dispatch(
		authSlice.actions.logIn({
			name: 'Vanya',
			login: 'Vanusha_academic',
			email: 'Vanya@mail.ru',
			id: '3453r756fdgre6',
		})
	)
}

export const logOut = (dispatch: AppDispatch) => {
	dispatch(authSlice.actions.logOut())
}
