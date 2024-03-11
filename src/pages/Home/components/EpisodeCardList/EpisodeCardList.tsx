import React from 'react'
import styles from './EpisodeCardList.module.css'
import { EpisodeCard } from '../EpisodeCard'
import { getEpisodes } from './utils/getEpisodes'

export type EpisodeCardListProps = {
	// types...
}

const EpisodeCardList: React.FC<EpisodeCardListProps> = ({}) => {
	const episodes = getEpisodes()
	return (
		<div className={styles.generalContainer}>
			<h2 className={styles.title}>EPISODES</h2>
			<div className={styles.list}>
				{episodes.map((episode, index) => (
					<EpisodeCard episode={episode} key={index} />
				))}
			</div>
		</div>
	)
}

export default EpisodeCardList
