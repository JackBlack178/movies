import { Header } from '../components/header'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './auth-provider/auth-provider'
import { useFakeLogin } from './useFakeLogin'

const LayoutMain = () => {
	useFakeLogin()

	return (
		<>
			<Header />
			<AuthProvider>
				<Outlet />
			</AuthProvider>
		</>
	)
}

export { LayoutMain }
