import React, { useRef, useState } from 'react'
import styles from './PlayClip.module.css'
import play from '/arrow-black.svg'
import pause from '/pause-black.svg'
export type PlayClipProps = {
	quote: string
	title: string
	audioUrl: string
}

const PlayClip: React.FC<PlayClipProps> = ({ quote, title, audioUrl }) => {
	const refAudio = useRef<HTMLAudioElement>(null)
	const handleAudio = () => {
		if (refAudio.current) {
			if (isPlay) {
				refAudio.current.pause()
				setPlay(false)
			} else {
				refAudio.current.play()
				setPlay(true)
			}
		}
	}
	const [isPlay, setPlay] = useState(false)
	return (
		<div className={styles.trailer}>
			<audio
				controls
				loop
				ref={refAudio}
				className={styles.hidden}
				data-testid='play-clip-audio'
			>
				<source src={audioUrl} type='audio/mp3' />
			</audio>
			<div className={styles.controlsAndQuote}>
				<div className={styles.container}>
					<p className={styles.title}>{title}</p>
					<p className={styles.quote}>{quote}</p>
					<div className={styles.controls}>
						<button
							className={styles.playAndPause}
							onClick={handleAudio}
							aria-label={isPlay ? 'Pause Clip' : 'Play Clip'}
							data-testid='play-clip-episode'
						>
							<img
								src={isPlay ? pause : play}
								alt={isPlay ? 'Pause' : 'Play'}
							/>
							PLAY TRAILER
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayClip
