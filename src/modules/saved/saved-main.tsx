import React, { FC } from 'react'

interface SavedMainProps {
	className?: string
}

const SavedMain: FC<SavedMainProps> = ({ className }) => {
	return (
		<section className={className}>
			<h1>saved</h1>
		</section>
	)
}

export { SavedMain }
