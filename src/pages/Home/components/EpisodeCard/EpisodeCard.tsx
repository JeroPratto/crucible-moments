import React, { useRef, useState } from 'react'
import styles from './EpisodeCard.module.css'
import { Link } from 'react-router-dom'
import { Episode } from '@/types/EpisodeCard'
import play from '/play.svg'
import pause from '/pause.svg'
import arrow from '/featured-grid/arrow-black.svg'
import { AnimateSoundWave } from '@/components/AnimateSoundWave'
import { SpotifyIcon } from '@/icons/spotify-icon'
import { GoogleIcon } from '@/icons/google-icon'
import { AppleIcon } from '@/icons/apple-icon'
import { AmazonIcon } from '@/icons/amazon-icon'

export type EpisodeCardProps = {
	episode: Episode
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
	const [isPlay, setPlay] = useState(false)
	const refAudio = useRef<HTMLAudioElement>(null)
	const handleAudio = () => {
		if (isPlay) {
			refAudio.current?.pause()
			setPlay(false)
		} else {
			refAudio.current?.play()
			setPlay(true)
		}
	}
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>
				<span className={styles.episode}>Episode {episode.numberEpisode}</span>{' '}
				{episode.title}
			</h3>
			<div className={styles.imageAndLinksContainer}>
				<div className={styles.links}>
					<div className={styles.list}>
						<LinksList />
					</div>
					<Link to={episode.goToEpisode} className={styles.goToEpisode}>
						GO TO EPISODE
						<img src={arrow} alt='' className={styles.arrrowMobile} />
					</Link>
				</div>
				{/*  */}
				<div
					className={`${styles.containerAudio} ${isPlay ? styles.play : ''}`}
				>
					<audio controls loop ref={refAudio}>
						<source src={episode.urlAudio} type='audio/mp3' />
					</audio>
					<div className={styles.controls}>
						<button className={styles.playAndPause} onClick={handleAudio}>
							<img
								src={isPlay ? pause : play}
								alt={isPlay ? 'Pause' : 'Play'}
							/>
						</button>
						<AnimateSoundWave isPlay={isPlay} />
					</div>
				</div>
				{/*  */}
				<img src={episode.urlImage} alt='' className={styles.bgImage} />
			</div>
			<div
				className={styles.background}
				style={{ backgroundColor: episode.bgColor }}
			></div>
		</div>
	)
}

export default EpisodeCard

const LinksList = () => {
	return (
		<>
			<a href='#' className={styles.icon} aria-label='Go to spotify'>
				<SpotifyIcon />
			</a>
			<a href='#' className={styles.icon} aria-label='Go to google'>
				<GoogleIcon />
			</a>
			<a href='#' className={styles.icon} aria-label='Go to apple'>
				<AppleIcon />
			</a>
			<a href='#' className={styles.icon} aria-label='Go to amazon'>
				<AmazonIcon />
			</a>
		</>
	)
}
