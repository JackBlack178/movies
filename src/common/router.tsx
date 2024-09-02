import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'
import { LayoutMain } from './layout-main'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<LayoutMain />}></Route>
		</>
	)
)
