import { Header } from '../components/header'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './auth-provider/auth-provider'

const LayoutMain = () => {
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
