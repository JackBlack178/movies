import{ FC } from 'react'

interface HomeMainProps {
	className?: string
}

const HomeMain: FC<HomeMainProps> = ({ className }) => {
	return (
		<section className={className}>
			<h1>Home</h1>
		</section>
	)
}

export { HomeMain }
