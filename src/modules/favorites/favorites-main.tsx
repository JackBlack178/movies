import React, { FC } from 'react'

interface FavoritesMainProps {
	className?: string
}

const FavoritesMain: FC<FavoritesMainProps> = ({ className }) => {
	return (
		<section className={className}>
			<h1>FAvotires</h1>
		</section>
	)
}

export { FavoritesMain }
