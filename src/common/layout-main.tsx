import React, { FC } from 'react'
import { Header } from '../components/header'
import { Outlet } from 'react-router-dom'

const LayoutMain = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export { LayoutMain }
