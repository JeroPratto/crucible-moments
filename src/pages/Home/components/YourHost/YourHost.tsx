import React, { useState } from 'react'
import styles from './YourHost.module.css'
import host from '/your-host.jpg'
import { ChangeFooterColor } from '@/components/ChangeFooterColor/ChangeFooterColor'
export type YourHostProps = {
	// types...
}

const YourHost: React.FC<YourHostProps> = ({}) => {
	const [showMore, setShowMore] = useState(false)
	const handleShowMore = () => setShowMore(true)
	ChangeFooterColor('#000')
	return (
		<div className={styles.container}>
			<div className={styles.title}>YOUR HOST</div>
			<div className={styles.imageContainer}>
				<img src={host} alt='' />
				<p>Sequoia Capital - Roelof Botha</p>
			</div>
			<div className={styles.informationGrid}>
				<div className={styles.titleAndText}>
					<p className={styles.informationTitle}>
						Crucible Moments: The Pivotal Decisions That Define Us
					</p>
					<p className={styles.by}>By Roelof Botha</p>
					<p className={`${styles.text} ${showMore ? styles.showMore : ''}`}>
						In 2012, Nvidia CEO Jensen Huang noticed something strange. The GPUs
						his company was producing for gaming consoles and computer graphics
						were starting to pop up in research labs and academic circles.
						Machine learning computations that had been taking weeks to complete
						shrunk to hours when run on Nvidia processors. There were no
						commercial applications for this technology—but Jensen saw a far-off
						opportunity and pounced, leading what he calls a “wholesale pivot”
						to reorient Nvidia toward enabling AI. Most saw this as profoundly
						risky. It took a full decade, until ChatGPT launched in 2022, to
						comprehend the magnitude of Jensen's audacious decision.
						<br />
						<br />
						This is what we at Sequoia call a crucible moment—an inflection
						point where a choice you make today has an outsized bearing on your
						trajectory for years or even decades. Crucible moments define
						companies. They also shape our careers and lives.
						<br />
						<br />I can identify a handful of decisions that disproportionately
						influenced the trajectory of my life. I grew up in South Africa. The
						country’s history cast a shadow, and I always felt that the
						innovation pushing the world forward—which I longed to be a part
						of—was happening elsewhere. Leaving my home, where I had deep roots,
						and setting off for the unknown in California was unnerving and
						lonely. It was full of risk. But it was also full of promise.
						Embracing uncertainty and moving to the heart of Silicon Valley just
						as the internet was taking off in the late 1990s profoundly altered
						the course of my life.
						<br />
						<br />I faced another crucible moment soon after arriving in
						California for business school. A currency collapse in South Africa
						in 1998 wiped out my savings. I had a stark choice to make. I could
						rejoin McKinsey (where I’d worked briefly in South Africa), which
						generously offered to pay for my education. Instead, I was drawn
						toward a scrappy startup I’d met that was facilitating payments over
						the nascent internet. The company was burning cash and had offered
						me a scant salary to work part-time while finishing my degree. But
						it was building a magical product with transformational potential.
						It wasn’t the obvious choice, but I joined PayPal—and once again my
						life changed course.
						<br />
						<br />
						At Sequoia, we have had the privilege of partnering early with many
						of the most iconic founders of the past half-century. Time and
						again, we’ve seen how their willingness to make bold decisions in
						crucible moments—to optimize for long-term impact over short-term
						wins—is what enables them to build legendary companies.
						<br />
						<br />
						Sometimes these moments are proactive, like Jensen pivoting to AI
						long before its time. Sometimes external factors create a forcing
						function for transformational change. A powerful example is Brian
						Chesky radically repositioning Airbnb through the pandemic. Airbnb’s
						revenue plunged 80% as lockdowns took hold—just as the company was
						preparing for an IPO. Less than two years later, after doubling down
						on its community and adapting its product for long-term stays,
						Airbnb went public at a valuation double its initial plan. That’s
						the impact of a crucible moment.
						<br />
						<br />
						Crucible moments typically don’t announce themselves. They can sneak
						up on you. I believe learning to recognize them and having the
						courage to act decisively—even when it requires defying conventional
						wisdom—is the single biggest determinant of sustained success.
						<br />
						<br />
						Following through on the initial insight often requires making
						painful changes. You may discover you need a new set of capabilities
						on your team—or that capabilities you’ve toiled to build no longer
						serve you. In every case, navigating a crucible moment requires
						conviction and the grit to overcome naysayers, near-term obstacles,
						and the possibility of failure.
						<br />
						<br />
						For over 50 years, Sequoia has faced its own crucible moments. When
						I joined in 2003, the scars of the 2000 dot-com crash remained
						fresh. Most firms had afforded themselves a “mulligan,” telling LPs
						that funds raised in the lead-up to the crash had been written off.
						Sequoia chose to do the opposite. We forfeited fees and reinvested
						proceeds until the funds yielded gains for our LPs. The decision
						established a defining principle that we would not let our clients
						lose money and helped crystallize core values of performance and
						stewardship that still guide us today.
						<br />
						<br />
						More recently, we have made foundational changes: we established the
						Sequoia Capital Fund, an innovative open-ended structure designed to
						weather short-term market fluctuations in order to attain the best
						long-term performance. The trust we earned with LPs following the
						dot-com crash and our continued performance allowed us to pioneer
						this approach. And in early 2023, after 15 years of growing leading
						firms under the Sequoia banner in China and India, we collectively
						decided to become fully independent partnerships across all five
						business units. Separating was not an obvious choice given each
						unit’s success—and yet it was the right decision for enduring impact
						in the coming decades.
						<br />
						<br />
						Recognizing the opportunities and risks inherent to crucible moments
						is core to how we work with founders. Each company will face a
						unique set of pivotal decisions that shapes their trajectory, and we
						spend most of our time helping identify and navigate them.
						Occasionally, we convene our companies to help them see around
						corners when seismic shifts create a crucible moment for everyone—as
						we did in the Global Financial Crisis of 2008, at the start of
						pandemic in 2020, and early in the 2022 market correction.
						<br />
						<br />
						Most recently, we convened founders at our AI Ascent event in March,
						2023 to call attention to the collective crucible moment we all
						currently face. The era of low-cost capital and easy fundraising has
						ended; meanwhile, an era of unprecedented innovation potential and
						productivity growth driven by AI is just beginning. The convergence
						of these factors requires us to adapt. How we do will define the
						next decade. Careers will be made. Companies will be formed that
						change how we live, work and play.
						<br />
						<br />
						We created our new podcast series, Crucible Moments, to offer a
						window into this mindset and this critical aspect of
						company-building. Legendary founders like Max Levchin of PayPal,
						Jack Dorsey of Block, Jensen Huang of Nvidia, Anne Wojcicki of
						23andMe, Brian Chesky of Airbnb and Julia Hartz of Eventbrite will
						bring you inside their decision-making and reveal how they navigated
						the crucible moments that shaped their journeys. Jensen will break
						down that pivotal pursuit of AI; you’ll learn how Airbnb navigated
						the pandemic to emerge stronger, and much more.
						<br />
						<br />
						At Sequoia, we help the daring build legendary companies from idea
						to IPO and beyond. We hope this series will prove useful and
						inspiring to a new generation of ambitious founders—and anyone
						curious for a new perspective on how to navigate the most important
						decisions you face when the answers are unclear.
						<span
							className={`${styles.yourHostOverlay} ${
								showMore ? styles.hidden : ''
							}`}
						></span>
					</p>
					<button
						className={`${styles.continueReading} ${
							showMore ? styles.hidden : ''
						}`}
						onClick={handleShowMore}
					>
						Continue reading
					</button>
				</div>
			</div>
		</div>
	)
}

export default YourHost
