import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import { ProfileIcon } from './icons/profile-icon'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/redux'
import { logOut } from '../common/auth-provider/login&logout'

interface HeaderMenuProps {
	userLogin: string
	className?: string
}

type MenuAction = 'Profile' | 'Logout'

const HeaderMenu: React.FC<HeaderMenuProps> = ({ userLogin, className }) => {
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef<HTMLButtonElement>(null)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen)
	}

	const handleClose = (
		event: Event | React.SyntheticEvent,
		action?: MenuAction
	) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return
		}

		if (action === 'Logout') {
			logOut(dispatch)
		}

		if (action === 'Profile') {
			navigate('profile')
		}

		setOpen(false)
	}

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		} else if (event.key === 'Escape') {
			setOpen(false)
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus()
		}

		prevOpen.current = open
	}, [open])

	return (
		<Stack direction='row' spacing={2} className={className}>
			<div>
				{' '}
				<Button
					className='justify-self-end flex gap-x-2 items-center padding-3 hover:opacity-70 hover:transition-opacity'
					onClick={handleToggle}
					ref={anchorRef}
				>
					<ProfileIcon className='w-8' />
					<span className='text-slate-800'>{userLogin}</span>{' '}
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement='bottom-start'
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === 'bottom-start' ? 'left top' : 'left bottom',
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id='composition-menu'
										aria-labelledby='composition-button'
										onKeyDown={handleListKeyDown}
									>
										<MenuItem onClick={event => handleClose(event, 'Profile')}>
											Profile
										</MenuItem>
										<MenuItem onClick={event => handleClose(event, 'Logout')}>
											Logout
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	)
}

export { HeaderMenu }
