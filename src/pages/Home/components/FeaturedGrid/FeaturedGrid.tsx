import React from 'react'
import styles from './FeaturedGrid.module.css'

export type FeaturedGridProps = {
	// types...
}

const FeaturedGrid: React.FC<FeaturedGridProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				<div className={styles.left}>
					<div className={styles.leftItem}>
						<video
							src={'/featured-grid/left-1.mp4'}
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
					<div className={styles.leftItem}>
						<img src={'/featured-grid/left-2.jpg'} alt='' />
						<p className={styles.title}>23andMe - Anne Wokcicki</p>
						<div className={styles.footer}>
							<p className={styles.footerTitle}>
								"I look at crucible moments as opportunities to pivot and
								explore a new path."
							</p>
							<p className={styles.footerSubtitle}>
								Anne Wojcicki - 23andMe, Ep 7
							</p>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.rightItem}>
						<img src={'/featured-grid/right-1.jpg'} alt='' />
						<div className={styles.footer}>
							<p className={styles.footerTitle}>
								"I think the general pattern of lean in, get bruised but not
								killed by adversity, figure out how to get out of it, do it
								again, is a pretty good formula for startups."
							</p>
							<p className={styles.footerSubtitle}>Max Levchin - PayPal, Ep1</p>
						</div>
					</div>
					<div className={styles.rightItem}>
						<video
							src={'/featured-grid/right-2.mp4'}
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
					<div className={styles.rightItem}>
						<img src={'/featured-grid/right-3.jpg'} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeaturedGrid
