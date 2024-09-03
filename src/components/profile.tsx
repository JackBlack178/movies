import { FC } from 'react'

interface ProfileProps {
	className?: string
}

const Profile: FC<ProfileProps> = ({ className }) => {
	return (
		<section className={className}>
			<h1>Profile</h1>
		</section>
	)
}

export { Profile }
