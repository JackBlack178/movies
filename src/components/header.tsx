import createTheme from '@mui/material/styles/createTheme'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import { ThemeProvider } from '@emotion/react'
import { LogoIcon } from './icons/logo-icon'
import { useAppDispatch, useAppSelector } from '../store/redux'
import { authSlice } from '../common/auth-provider/auth-slice'
import { HeaderMenu } from './header-menu'
import { logIn } from '../common/auth-provider/login&logout'

const buttonTheme = createTheme({
	palette: {
		primary: {
			main: '#333',
			contrastText: '#fff',
		},
	},
})

const Header = () => {
	const userLogin = useAppSelector(authSlice.selectors.login)
	const dispatch = useAppDispatch()

	return (
		<header className=' bg-orange-300 p-4 grid grid-cols-3 justify-items-center gap-x-4 items-center'>
			<LogoIcon className='h-auto max-w-[50px] justify-self-start' />

			<nav className='flex gap-x-4'>
				<NavLink to='/' className=' hover:text-gray-600 duration-200'>
					Home
				</NavLink>
				<NavLink to='/saved' className=' hover:text-gray-600 duration-200'>
					Saved
				</NavLink>
				<NavLink to='/favorites' className=' hover:text-gray-600 duration-200'>
					Favorites
				</NavLink>
			</nav>

			<>
				{!!userLogin && (
					<HeaderMenu className='justify-self-end' userLogin={userLogin} />
				)}

				{!userLogin && (
					<ThemeProvider theme={buttonTheme}>
						<Button
							onClick={() => logIn(dispatch)}
							variant='contained'
							size='medium'
							className='max-w-[200px] justify-self-end bg-slate-600 hover:bg-slate-500 hover:transition-all padding-3'
						>
							Sign in/Sign up
						</Button>
					</ThemeProvider>
				)}
			</>
		</header>
	)
}

export { Header }
