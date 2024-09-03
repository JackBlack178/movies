import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'

import { HomeMain } from '../modules/home/home-main'
import { SavedMain } from '../modules/saved/saved-main'
import { FavoritesMain } from '../modules/favorites/favorites-main'
import { LayoutMain } from './layout-main'
import { Login } from '../components/login'
import { Profile } from '../components/profile'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<LayoutMain />}>
				<Route index element={<HomeMain />} />
				<Route path='saved' element={<SavedMain />} />
				<Route path='favorites' element={<FavoritesMain />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/login' element={<Login />} />
			</Route>
		</>
	)
)
