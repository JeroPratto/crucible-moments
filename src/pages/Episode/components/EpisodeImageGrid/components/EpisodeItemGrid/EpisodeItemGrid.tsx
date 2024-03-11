import React from 'react'
import styles from './EpisodeItemGrid.module.css'

export type EpisodeItemGridProps = {
	urlImage: string
	title?: string
	desc?: string
	double?: boolean
}

const EpisodeItemGrid: React.FC<EpisodeItemGridProps> = ({
	urlImage,
	double,
	title,
	desc,
}) => {
	return (
		<div className={`${styles.item} ${double ? styles.double : ''}`}>
			<div className={styles.imagecontainer}>
				<img src={urlImage} alt={title} data-testid='episode-item-grid-image' />
			</div>
			<div className={styles.titleAndDesc}>
				{title ? <p className={styles.title}>{title}</p> : ''}
				{desc ? <p className={styles.desc}>{desc}</p> : ''}
			</div>
		</div>
	)
}

export default EpisodeItemGrid
