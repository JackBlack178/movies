import { FC, ReactNode } from 'react'
import { useAppSelector } from '../../store/redux'
import { authSlice } from './auth-slice'
import { Navigate } from 'react-router-dom'

interface AuthProviderProps {
	children?: ReactNode
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const isUserLogined = useAppSelector(authSlice.selectors.isLogined)

	if (!isUserLogined) return <Navigate to='/login' replace={true} /> //TODO Есть баг связанный с авторедиректом на главную страницу т.е. нельзя зайти сразу на /profile. Идет редирект на главную

	return <>{children}</>
}

export { AuthProvider }
