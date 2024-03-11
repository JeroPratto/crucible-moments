import React from 'react'
import styles from './HeroHome.module.css'
import leftVideo from '/hero-home/left-video.mp4'
import rightVideo from '/hero-home/right-video.mp4'
import heroLogo from '/hero-logo.svg'

export type HeroHomeProps = {
	// types...
}

const HeroHome: React.FC<HeroHomeProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<img src={heroLogo} alt='' />
			</div>
			<div className={styles.videosContainer}>
				<div className={styles.video}>
					<video autoPlay loop muted playsInline src={leftVideo} />
				</div>
				<div className={styles.video}>
					<video autoPlay loop muted playsInline src={rightVideo} />
				</div>
			</div>
		</div>
	)
}

export default HeroHome
