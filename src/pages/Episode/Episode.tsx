import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getEpisode } from './utils/getEpisode'
import { ListenNowOn } from '@/components/ListenNowOn'
import { EnterYourEmail } from '../Home/components/EnterYourEmail'
import { EpisodeImageGrid } from './components/EpisodeImageGrid'
import { EpisodeItem } from '@/types/EpisodeItem'
import { EpisodeHero } from './components/EpisodeHero'
import styles from './Episode.module.css'
import { PlayClip } from './components/PlayClip'
import { ChangeFooterColor } from '@/components/ChangeFooterColor/ChangeFooterColor'

export type EpisodeProps = {
	// types...
}

const Episode: React.FC<EpisodeProps> = ({}) => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [item, setItem] = useState<EpisodeItem | null>(null)
	useEffect(() => {
		const item = getEpisode(id)
		if (!item) {
			navigate('/')
		}
		setItem(item)
		if (item?.title) document.title = item.title
	}, [id, navigate])
	ChangeFooterColor(item?.bgColor)
	return (
		<>
			{item && (
				<div style={{ backgroundColor: item.bgColor }}>
					<EpisodeHero urlImage={item.mainImage} title={item.title} />
					<ListenNowOn
						blackMode={true}
						urlList={item.listenNowOn}
						principal='#000'
						secondary={item.bgColor}
						backgroundColor={item.bgColor}
					/>
					<div className={styles.titlesContainer}>
						<p className={styles.secondTitle}>{item.secondTitle}</p>
						<p className={styles.subTitle}>{item.subTitle}</p>
					</div>
					<PlayClip {...item.trailer} />
					<EpisodeImageGrid items={item.items} />
					<EnterYourEmail color='#000' />
				</div>
			)}
		</>
	)
}

export default Episode
