import React from 'react'
import styles from './ListenNowOn.module.css'
import { getListenNowOn } from '@/pages/Home/utils/getListenNowOn'

export type ListenNowOnProps = {
	urlList: string[]
	blackMode: boolean
	principal?: string
	secondary?: string
	backgroundColor?: string
}

const ListenNowOn: React.FC<ListenNowOnProps> = ({
	urlList,
	blackMode,
	backgroundColor = 'transparent',
	principal,
	secondary,
}) => {
	const icons = getListenNowOn()
	return (
		<div
			className={`${styles.container} ${blackMode ? styles.blackMode : ''}`}
			style={{ backgroundColor: backgroundColor }}
		>
			<p className={styles.title}>LISTEN NOW ON</p>
			<div className={styles.linksContainer}>
				{icons.map((icon, index) => (
					<a
						href={urlList[index]}
						target='_blank'
						key={index}
						className={styles.link}
					>
						<icon.icon principal={principal} secondary={secondary} />
						{icon.label}
					</a>
				))}
			</div>
		</div>
	)
}

export default ListenNowOn
