import React from 'react'
import styles from './EpisodeHero.module.css'
import heroLogo from '/hero-logo-black.svg'

export type EpisodeHeroProps = {
	urlImage: string
	title: string
}

const EpisodeHero: React.FC<EpisodeHeroProps> = ({ urlImage, title }) => {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<img src={heroLogo} alt='' />
			</div>
			<div className={styles.imageContainer}>
				<img src={urlImage} alt={title} data-testid='episode-hero-image' />
			</div>
			<h1 className={styles.title}>{title}</h1>
		</div>
	)
}

export default EpisodeHero
