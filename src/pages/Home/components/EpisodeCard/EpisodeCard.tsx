import React, { useRef, useState } from 'react'
import styles from './EpisodeCard.module.css'
import { Link } from 'react-router-dom'
import { Episode } from '@/types/EpisodeCard'
import play from '/play.svg'
import pause from '/pause.svg'
import arrow from '/featured-grid/arrow-black.svg'
import { AnimateSoundWave } from '@/components/AnimateSoundWave'

export type EpisodeCardProps = {
	episode: Episode
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
	const [isPlay, setPlay] = useState(false)
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
			<a href='#' className={styles.icon}>
				<svg
					width='12'
					height='12'
					viewBox='0 0 12 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5.99996 0C2.68635 0 0 2.68634 0 6.00004C0 9.31388 2.68635 12 5.99996 12C9.31394 12 12 9.31388 12 6.00004C12 2.68655 9.31394 0.000286595 5.99989 0.000286595L5.99996 0ZM8.75151 8.65377C8.64404 8.83003 8.41333 8.88592 8.23708 8.77773C6.82835 7.91722 5.05494 7.72234 2.96642 8.19952C2.76516 8.24537 2.56455 8.11927 2.51869 7.91794C2.47262 7.7166 2.59822 7.51599 2.79998 7.47013C5.08553 6.94795 7.04602 7.17279 8.62756 8.13933C8.80381 8.24752 8.8597 8.47752 8.75151 8.65377ZM9.48589 7.02003C9.35048 7.24014 9.06246 7.30964 8.8425 7.17422C7.22972 6.18288 4.77128 5.89579 2.86367 6.47485C2.61627 6.54958 2.35498 6.41015 2.27989 6.16318C2.20538 5.91578 2.34487 5.65497 2.59184 5.57974C4.77085 4.91856 7.47977 5.23884 9.33185 6.37698C9.55181 6.5124 9.62131 6.80036 9.48589 7.02003ZM9.54894 5.3188C7.61518 4.17019 4.42473 4.06458 2.57845 4.62495C2.28197 4.71487 1.96844 4.54749 1.87859 4.25101C1.78875 3.95438 1.95597 3.64106 2.25266 3.55093C4.37206 2.90752 7.89532 3.03183 10.1217 4.35354C10.3889 4.51181 10.4763 4.85623 10.318 5.12255C10.1604 5.38923 9.81504 5.47714 9.54923 5.3188H9.54894Z'
						fill='currentColor'
					></path>
				</svg>
			</a>
			<a href='#' className={styles.icon}>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M8.32648 6.8314V9.36746H11.9404C11.4679 10.904 10.1836 12.0037 8.32648 12.0037C6.11498 12.0037 4.32228 10.211 4.32228 8.00021C4.32228 5.78936 6.11498 3.99667 8.32648 3.99667C9.32073 3.99667 10.2287 4.36105 10.9289 4.96105L12.7966 3.09335C11.6172 2.01879 10.0482 1.36304 8.32648 1.36304C4.66011 1.36304 1.68799 4.3345 1.68799 8.00021C1.68799 11.6659 4.66011 14.6374 8.32648 14.6374C13.8991 14.6374 15.1289 9.4272 14.5827 6.84003L8.32648 6.8314Z'
						fill='currentColor'
					></path>
				</svg>
			</a>
			<a href='#' className={styles.icon}>
				<svg
					width='19'
					height='20'
					viewBox='0 0 19 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M14.192 15.6872C13.5624 16.6278 12.8949 17.5456 11.8785 17.5608C10.8621 17.5835 10.5359 16.9615 9.38293 16.9615C8.22237 16.9615 7.86586 17.5456 6.90252 17.5835C5.90884 17.6214 5.1579 16.5822 4.52073 15.6644C3.22364 13.7908 2.22996 10.3395 3.56498 8.0184C4.2249 6.86543 5.40821 6.13724 6.69013 6.11449C7.66106 6.09931 8.58647 6.77441 9.18571 6.77441C9.77736 6.77441 10.9 5.96278 12.0757 6.08414C12.5688 6.1069 13.9493 6.28136 14.8368 7.58604C14.7685 7.63155 13.1908 8.55696 13.2059 10.4761C13.2287 12.7668 15.216 13.5329 15.2388 13.5405C15.216 13.5936 14.9202 14.6328 14.192 15.6872ZM9.8608 3.55064C10.4145 2.92106 11.3324 2.44318 12.0909 2.41284C12.1895 3.30033 11.833 4.1954 11.302 4.83256C10.7786 5.47732 9.9139 5.97795 9.06434 5.90968C8.95056 5.03737 9.37534 4.12713 9.8608 3.55064Z'
						fill='currentColor'
					></path>
				</svg>
			</a>
			<a href='#' className={styles.icon}>
				<svg
					width='16'
					height='14'
					viewBox='0 0 16 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clipPath='url(#clip0_30_2549)'>
						<path
							d='M0.0290909 10.8607C0.0775709 10.7861 0.155142 10.7814 0.261818 10.8467C2.68605 12.1999 5.32364 12.8765 8.17455 12.8765C10.0751 12.8765 11.9515 12.5359 13.8036 11.8546C13.8521 11.836 13.9224 11.808 14.0145 11.7706C14.1067 11.7333 14.1721 11.7053 14.2109 11.6866C14.3564 11.6307 14.4703 11.6586 14.5527 11.7706C14.6351 11.8826 14.6085 11.9853 14.4727 12.0786C14.2982 12.1999 14.0751 12.3399 13.8036 12.4985C12.9697 12.9745 12.0388 13.3431 11.0109 13.6044C9.98303 13.8657 8.97939 13.9964 8 13.9964C6.48727 13.9964 5.05696 13.7421 3.70909 13.2335C2.36121 12.7249 1.15393 12.0086 0.0872727 11.0847C0.0290909 11.0381 0 10.9914 0 10.9447C0 10.9167 0.00968727 10.8887 0.0290909 10.8607ZM4.40727 6.87122C4.40727 6.2273 4.57212 5.6767 4.90182 5.21942C5.23151 4.76214 5.68241 4.41685 6.25455 4.18355C6.77818 3.96891 7.42303 3.81493 8.18909 3.7216C8.45091 3.6936 8.87757 3.65627 9.46909 3.60961V3.37164C9.46909 2.77438 9.40121 2.3731 9.26545 2.16779C9.06182 1.88782 8.74182 1.74784 8.30545 1.74784H8.18909C7.86909 1.77583 7.59273 1.87382 7.36 2.0418C7.12727 2.20978 6.97696 2.44309 6.90909 2.74172C6.8703 2.92836 6.77332 3.03568 6.61818 3.06368L4.94545 2.8677C4.7806 2.83037 4.69818 2.74638 4.69818 2.61573C4.69818 2.58774 4.70303 2.55508 4.71273 2.51774C4.87757 1.68718 5.28241 1.07126 5.92727 0.669966C6.57212 0.268676 7.32605 0.0447033 8.18909 -0.00195312H8.55273C9.65818 -0.00195312 10.5212 0.273352 11.1418 0.823948C11.2392 0.917695 11.3291 1.0183 11.4109 1.12491C11.4933 1.23224 11.5588 1.32789 11.6073 1.41188C11.6558 1.49587 11.6994 1.61719 11.7382 1.77583C11.777 1.93448 11.8061 2.04414 11.8255 2.10479C11.8448 2.16545 11.8594 2.29611 11.8691 2.49675C11.8788 2.69739 11.8836 2.81637 11.8836 2.8537V6.2413C11.8836 6.48393 11.92 6.70558 11.9927 6.90622C12.0655 7.10686 12.1358 7.25151 12.2036 7.34017C12.2715 7.42882 12.383 7.57114 12.5382 7.76712C12.5964 7.85111 12.6255 7.92576 12.6255 7.99109C12.6255 8.06574 12.5867 8.13107 12.5091 8.18707C11.7042 8.85898 11.2679 9.22294 11.2 9.27893C11.0836 9.36292 10.943 9.37226 10.7782 9.30693C10.6424 9.19494 10.5236 9.08762 10.4218 8.98497C10.32 8.88232 10.2473 8.80765 10.2036 8.761C10.16 8.71434 10.0897 8.62335 9.99273 8.48803C9.89575 8.35271 9.82787 8.26172 9.78909 8.21506C9.24605 8.78433 8.71273 9.13895 8.18909 9.27893C7.85939 9.37226 7.45212 9.41892 6.96727 9.41892C6.2206 9.41892 5.60727 9.19728 5.12727 8.754C4.64727 8.31071 4.40727 7.68313 4.40727 6.87122ZM6.90909 6.59126C6.90909 6.95521 7.00364 7.24684 7.19273 7.46615C7.38182 7.68546 7.63636 7.79511 7.95636 7.79511C7.98545 7.79511 8.02666 7.79045 8.08 7.78111C8.13332 7.77178 8.16969 7.76712 8.18909 7.76712C8.59636 7.66447 8.91151 7.4125 9.13455 7.01121C9.24121 6.83389 9.32121 6.64025 9.37455 6.43028C9.42787 6.2203 9.45696 6.04998 9.46182 5.91934C9.46666 5.78869 9.46909 5.57404 9.46909 5.27541V4.92546C8.90666 4.92546 8.48 4.96279 8.18909 5.03744C7.33575 5.27075 6.90909 5.78869 6.90909 6.59126ZM13.0182 11.0987C13.0376 11.0614 13.0667 11.0241 13.1055 10.9867C13.3479 10.8281 13.5806 10.7208 13.8036 10.6648C14.1721 10.5714 14.5309 10.5201 14.88 10.5108C14.977 10.5014 15.0691 10.5061 15.1564 10.5248C15.5927 10.5621 15.8545 10.6321 15.9418 10.7348C15.9806 10.7908 16 10.8747 16 10.9867V11.0847C16 11.4113 15.9079 11.7963 15.7236 12.2396C15.5394 12.6829 15.2824 13.0398 14.9527 13.3105C14.9042 13.3478 14.8606 13.3664 14.8218 13.3664C14.8024 13.3664 14.783 13.3618 14.7636 13.3524C14.7055 13.3244 14.6909 13.2731 14.72 13.1985C15.0788 12.3866 15.2582 11.822 15.2582 11.5047C15.2582 11.402 15.2388 11.3274 15.2 11.2807C15.103 11.1687 14.8315 11.1127 14.3855 11.1127C14.2206 11.1127 14.0267 11.1221 13.8036 11.1407C13.5612 11.1687 13.3382 11.1967 13.1345 11.2247C13.0764 11.2247 13.0376 11.2154 13.0182 11.1967C12.9988 11.178 12.9939 11.1594 13.0036 11.1407C13.0036 11.1314 13.0085 11.1174 13.0182 11.0987Z'
							fill='currentColor'
						></path>
					</g>
					<defs>
						<clipPath id='clip0_30_2549'>
							<rect width='16' height='14' fill='currentColor'></rect>
						</clipPath>
					</defs>
				</svg>
			</a>
		</>
	)
}
