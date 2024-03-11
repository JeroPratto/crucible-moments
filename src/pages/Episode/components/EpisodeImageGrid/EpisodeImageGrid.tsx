import React from 'react'
import styles from './EpisodeImageGrid.module.css'
import { EpisodeItemGrid } from './components/EpisodeItemGrid'

export type EpisodeImageGridProps = {
	items: {
		urlImage: string
		title?: string
		desc?: string
		double?: boolean
	}[]
}

const EpisodeImageGrid: React.FC<EpisodeImageGridProps> = ({ items }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>BEHIND THE EPISODE</h2>
			<div className={styles.grid}>
				{items.map((item, index) => (
					<EpisodeItemGrid
						urlImage={item.urlImage}
						title={item.title}
						desc={item.desc}
						double={item.double}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}

export default EpisodeImageGrid
