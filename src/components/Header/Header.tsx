import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'
import igIcon from '/instagram-icon.svg'
import xIcon from '/x-icon.svg'
import linkedinIcon from '/linkedin-icon.svg'
import { useLocation } from 'react-router-dom'
import MenuWrapper from './components/MenuWrapper'

export type HeaderProps = {
	// types...
}

const Header: React.FC<HeaderProps> = ({}) => {
	const location = useLocation()
	const [isHome, setIsHome] = useState(location.pathname === '/')
	const [openMenu, setOpenMenu] = useState(false)
	useEffect(() => {
		if (location.pathname === '/') {
			setIsHome(true)
		} else setIsHome(false)
	}, [location])
	return (
		<>
			<header className={styles.header}>
				<div className={`${styles.container} ${isHome ? styles.home : ''}`}>
					{!isHome && (
						<div className={styles.returnHome} data-testid='return-home-button'>
							<Link to='/'>
								<img src={arrow} alt='Go to home' />
								<span> HOME</span>
							</Link>
						</div>
					)}
					<nav className={styles.nav}>
						<a href='#' className={styles.linkIcon}>
							<img src={igIcon} alt='Instagram' />
						</a>
						<a href='#' className={styles.linkIcon}>
							<img src={xIcon} alt='Twitter / x' />
						</a>
						<a href='#' className={styles.linkIcon}>
							<img src={linkedinIcon} alt='Linkedin' />
						</a>
						<button
							className={styles.allEpisodes}
							onClick={() => setOpenMenu(true)}
							data-testid='button-all-episodes'
						>
							ALL EPISODES
						</button>
					</nav>
				</div>
			</header>
			<MenuWrapper isOpen={openMenu} setOpen={setOpenMenu} />
		</>
	)
}

export default Header
