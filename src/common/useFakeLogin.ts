import { useEffect } from 'react'
import { authSlice } from './auth-provider/auth-slice'
import { useAppDispatch } from '../store/redux'

export const useFakeLogin = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(
			authSlice.actions.logIn({
				name: 'Vanya',
				login: 'Vanusha_academic',
				email: 'Vanya@mail.ru',
				id: '3453r756fdgre6',
			})
		)
	}, [dispatch])
}
