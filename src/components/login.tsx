import { FC } from 'react'
import { useAppSelector } from '../store/redux'
import { authSlice } from '../common/auth-provider/auth-slice'
import { Navigate } from 'react-router-dom'

interface LoginProps {
	className?: string
}

const Login: FC<LoginProps> = () => {
	const isLogined = useAppSelector(authSlice.selectors.isLogined)

	if (isLogined) return <Navigate to='/' replace></Navigate>

	return <section></section>
}

export { Login }
