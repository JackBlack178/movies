import { FC, ReactNode } from 'react'
import { useAppSelector } from '../../store/redux'
import { authSlice } from './auth-slice'
import { Navigate } from 'react-router-dom'

interface AuthProviderProps {
	children?: ReactNode
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const isUserLogined = useAppSelector(authSlice.selectors.isLogined)
	const user = useAppSelector(authSlice.selectors.all)

	console.log(isUserLogined)
	console.log(user)

	if (!isUserLogined) return <Navigate to='/login' replace={true} />

	return <>{children}</>
}

export { AuthProvider }
