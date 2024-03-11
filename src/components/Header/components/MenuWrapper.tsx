import { Link } from 'react-router-dom'
import styles from './MenuWrapper.module.css'
import close from '/close-icon.svg'
import listOfEpisodes from './utils/listOfEpisodes'
export type MenuWrapperProps = {
	isOpen: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuWrapper: React.FC<MenuWrapperProps> = ({ isOpen, setOpen }) => {
	const episodes = listOfEpisodes()
	const closeMenu = () => setOpen(false)
	return (
		<div
			className={`${styles.container} ${isOpen ? styles.open : ''}`}
			data-testid='menu-wrapper'
		>
			<div className={styles.headerAndEpisodes}>
				<div className={styles.header}>
					<p className={styles.title}>Episodes</p>
					<button className={styles.close} onClick={closeMenu}>
						<img src={close} alt='close menu' />
					</button>
				</div>
				<div className={styles.episodesContainer}>
					<Link to='/' className={styles.home}>
						Home
					</Link>
					<ul className={styles.list}>
						{episodes.map((episode, index) => (
							<li className={styles.item} key={index}>
								<span className={styles.number}>E{index + 1}</span>
								<Link to={episode.url} onClick={closeMenu}>
									{episode.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MenuWrapper
