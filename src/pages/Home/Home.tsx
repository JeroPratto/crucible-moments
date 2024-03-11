import { useEffect, useRef, useState } from 'react'
import { ListenNowOn } from '../../components/ListenNowOn'
import { EpisodeCardList } from './components/EpisodeCardList'
import { HeroHome } from './components/HeroHome'
import styles from './Home.module.css'
import play from '/arrow-black.svg'
import pause from '/pause-black.svg'
import wave from '/wave.svg'
import { FeaturedGrid } from './components/FeaturedGrid'
import { EnterYourEmail } from './components/EnterYourEmail'
import { YourHost } from './components/YourHost'
export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps> = ({}) => {
	const list = ['#', '#', '#', '#', '#']
	const refAudio = useRef(null)
	const handleAudio = () => {
		if (isPlay) {
			refAudio.current!.pause()
			setPlay(false)
		} else {
			refAudio.current!.play()
			setPlay(true)
		}
	}
	const [isPlay, setPlay] = useState(false)
	useEffect(() => {
		document.title = 'Crucible Moments | A podcast from Sequoia'
	}, [])
	return (
		<div>
			<HeroHome />
			<ListenNowOn
				backgroundColor='#000'
				blackMode={false}
				urlList={list}
				principal='#fff'
				secondary='#000'
			/>
			<div className={styles.informationAndTrailer}>
				<p>
					Succeed or fail, every startup faces critical crossroads that define
					its journey. Crucible moments are pivotal inflection points where a
					choice you make today has an outsized bearing on your trajectory for
					years or even decades. In this podcast series, hear from founders of
					some of the most important companies of our time as they bring you
					inside the crucible moments that shaped their stories. Hosted by
					Roelof Botha of Sequoia Capital.
				</p>
				<div className={styles.trailer}>
					<audio controls loop ref={refAudio} className={styles.hidden}>
						<source
							src='https://arc-us.s3.amazonaws.com/audio/Frontpage/Top/Trailer%20for%20frontpage.mp3'
							type='audio/mp3'
						/>
					</audio>
					<div className={styles.controls}>
						<button className={styles.playAndPause} onClick={handleAudio}>
							<img
								src={isPlay ? pause : play}
								alt={isPlay ? 'Pause' : 'Play'}
							/>
							PLAY TRAILER
						</button>
						<img src={wave} alt='' className={styles.wave} />
					</div>
				</div>
				<FeaturedGrid />
			</div>
			<EpisodeCardList />
			<EnterYourEmail color='#fff' bgColor='#000' />
			<YourHost />
		</div>
	)
}

export default Home
