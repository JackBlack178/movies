import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'
import { LayoutMain } from './layout-main'
import { HomeMain } from '../modules/home/home-main'
import { SavedMain } from '../modules/saved/saved-main'
import { FavoritesMain } from '../modules/favorites/favorites-main'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<LayoutMain />}>
				<Route index element={<HomeMain />} />
				<Route path='saved' element={<SavedMain />} />
				<Route path='favorites' element={<FavoritesMain />} />
			</Route>
		</>
	)
)
