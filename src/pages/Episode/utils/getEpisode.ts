import { Episodes } from '@/types/EpisodeItem'

export const getEpisode = (id: string | undefined) => {
	if (!id) return null
	const episodes: Episodes = {
		paypal: {
			bgColor: 'rgb(250, 178, 58)',
			mainImage: '/episodes/episode1/mainImage.webp',
			title: 'PayPal – Max Levchin',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				'If you’ve ever networked through LinkedIn, driven in a Tesla, or even watched a YouTube video, you have PayPal to thank. The founders of all these companies got their start when the internet was just taking off, at a fledgling payments startup. PayPal would become a defining tech company, with many of its breakthroughs becoming standard practices for a generation of startups. But these lessons were hard-won in the company’s chaotic start. The PayPal of today only exists because of how its team navigated early crucible moments, including a merger between enemies, a battle against fraud that resulted in security innovations still in use today, and a decision to pursue one of the most significant tech IPOs following the dot-com crash. Explore the inflection points that shaped a cornerstone of Silicon Valley.',
			trailer: {
				title: 'MAX LEVCHIN / PAYPAL',
				quote:
					'“And this competition drives both teams utterly completely crazy right. The world knows that Elon is no slouch and he wants to win and he wants to be successful. What maybe fewer people understand but ”',
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/Paypal/Spies-Die-Die-Die.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode1/01.webp',
					title: 'MAX LEVCHIN',
					desc: 'MAX LEVCHIN COFOUNDED PAYPAL IN 1997 AT THE AGE OF 23. LIKE OTHERS IN THE "PAYPAL MAFIA," MAX HAS SINCE FOUNDED AND FUNDED NUMEROUS COMPANIES AROUND THE WORLD. HE CURRENTLY SERVES AS THE FOUNDER AND CEO OF AFFIRM, A NEXT-GENERATION CREDIT CARD NETWORK.',
				},
				{
					urlImage: '/episodes/episode1/02.webp',
					title: 'DAVE GAUSEBECK',
					desc: 'DAVE GAUSEBECK JOINED PAYPAL WHEN THE ENTIRE COMPANY FIT INTO A SINGLE CONFERENCE ROOM AND, WHILE THERE, CO-DEVELOPED THE FIRST COMMERCIAL IMPLEMENTATION OF A CAPTCHA. HE NOW LEADS TECHNOLOGICAL RESEARCH AND OPERATIONS AT MATTERPORT, A SPATIAL COMPUTING PLATFORM HE FOUNDED IN 2011.',
				},
				{
					urlImage: '/episodes/episode1/03.webp',
					title: 'MICHAEL MORITZ',
					desc: 'MICHAEL MORITZ WAS THE SEQUOIA PARTNER WHO JOINED THE BOARD OF PAYPAL IN 1999. AFTER 38 YEARS WITH SEQUOIA CAPITAL, MICHAEL NOW SERVES AS AN ADVISOR TO SEQUOIA HERITAGE AND AS PRESIDENT OF HIS FAMILY FOUNDATION, CRANKSTART. ',
				},
				{
					urlImage: '/episodes/episode1/04.webp',
					title: 'JIMMI SONI',
					desc: 'JIMMY SONI IS AN AWARD-WINNING AUTHOR. HIS LATEST BOOK IS "THE FOUNDERS: THE STORY OF PAYPAL AND THE ENTREPRENEURS WHO SHAPED SILICON VALLEY." HIS PREVIOUS BOOK, "A MIND AT PLAY: HOW CLAUDE SHANNON INVENTED THE INFORMATION AGE," WON THE 2017 NEUMANN PRIZE.',
				},
				{
					urlImage: '/episodes/episode1/05.webp',
					desc: 'THE PAYPAL TEAM CELEBRATING THEIR 2002 IPO: PETER THIEL (RIGHT) AND ROELOF BOTHA PLAY CHESS.',
					double: true,
				},
				{
					urlImage: '/episodes/episode1/06.webp',
					desc: 'JANUARY 1999. PROBABLY FIRST PAYPAL COMPANY PICTURE EVER TAKEN. FIELDLINK, INC; BUILDING SECURITY SOFTWARE FOR HANDHELD DEVICES.',
				},
				{
					urlImage: '/episodes/episode1/07.webp',
					desc: 'SUMMER 2002. JUST DAYS BEFORE THE EBAY ACQUISITION NEGOTIATIONS START.',
				},
				{
					urlImage: '/episodes/episode1/08.webp',
					desc: 'ROELOF BOTHA WITH MAX LEVCHIN.',
				},
				{
					urlImage: '/episodes/episode1/09.webp',
					desc: 'NASDAQ’S COMMEMORATIVE CAKE FOR PAYPAL ON THE DAY OF THE COMPANY’S IPO.',
				},
			],
		},
		airbnb: {
			bgColor: '#eb2926',
			mainImage: '/episodes/episode2/mainImage.webp',
			title: 'Airbnb – Brian Chesky',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				'Initially a website that connected strangers to sleep on air mattresses on each other’s floors, Airbnb defied the odds as it exploded to become one of the breakout tech unicorns of the early 2010s. However, Brian Chesky remembers worrying, “this is just one accident away from being a dead idea.” That accident finally came in 2011 when a host’s apartment was ransacked. More than a PR crisis, it was an existential reckoning—but it fostered a transformation that led to Airbnb becoming the beloved go-to global travel behemoth it is today. The questions Chesky learned to ask himself would guide him through navigating the company’s next crucible moments, including a pandemic that shut down global travel: “What’s the principle decision?” and “How do we want to be remembered?”',
			trailer: {
				title: 'BRIAN CHESKY / AIRBNB',
				quote:
					'“A host in San Francisco named EJ reported that somebody stayed in her home and ransacked it. And it became viral. Suddenly, there was this massive"',
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/Airbnb/Ransackgate.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode2/01.webp',
					title: 'BRIAN CHESKY',
					desc: 'BRIAN CHESKY IS THE COFOUNDER AND CEO OF AIRBNB. IN 2007, BRIAN AND JOE GEBBIA BECAME AIRBNB’S FIRST HOSTS AND HAVE GROWN THE COMPANY TO OVER 4 MILLION HOSTS WHO HAVE WELCOMED MORE THAN 1.5 BILLION GUESTS.',
				},
				{
					urlImage: '/episodes/episode2/02.webp',
					title: 'ELLIE MERTZ',
					desc: 'ELLIE MERTZ IS THE VICE PRESIDENT OF FINANCE AT AIRBNB WHO HELPED THE COMPANY NAVIGATE BOTH THE COVID-19 PANDEMIC AND THE COMPANY’S SUBSEQUENT 2020 IPO. ELLIE SERVES ON THE BOARD OF DOORDASH AND FAIRE.',
				},
				{
					urlImage: '/episodes/episode2/03.webp',
					desc: 'AIRBNB TEAM DINNER NOVEMBER 3, 2009',
					double: true,
				},
				{
					urlImage: '/episodes/episode2/04.webp',
					desc: 'BRIAN CHESKY AND ALFRED LIN AT SEQUOIA BASECAMP',
				},
				{
					urlImage: '/episodes/episode2/05.webp',
					desc: 'FIRST AIRBNB “OFFICE”',
				},
				{
					urlImage: '/episodes/episode2/06.webp',
					desc: 'AIRBNB HITS $47 BILLION VALUE IN IPO',
				},
			],
		},
		block: {
			bgColor: '#b06300',
			mainImage: '/episodes/episode3/mainImage.webp',
			title: 'Block – Jack Dorsey',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				'CEO Jack Dorsey’s ultimate vision for Block was always about economic empowerment for all. Initially called Square, the company’s first product—the white dongle that let small businesses turn an iPhone into a credit card reader—was just a first step. So when a hack week project called Cash App that let anyone send money for free started gaining traction, Dorsey wanted to support it. It was easier said than done. It seemed like a strategic departure and it was costing lots of time and money. “Everyone wanted to kill it,” Dorsey says. Today, Cash App accounts for half the company’s revenue. In this episode, Dorsey explains how the company navigated this strategic shift, and how companies can succeed by weaving successive products and experiences around a singular, core vision.',
			trailer: {
				title: 'ALYSSA HENRY / BLOCK',
				quote:
					'“In company or business building there will always be dark hours. No company, no business is immune from these periods of time. Square was going through those moments in 2014 and 2015. But I think we were planting the seeds then that have led to the success of Block overall"',
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/Block/There-will-always-be-dark-hours.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode3/01.webp',
					title: 'JACK DORSEY',
					desc: 'JACK DORSEY IS THE HEAD OF, CHAIRMAN, AND COFOUNDER OF BLOCK (FORMERLY SQUARE). PRIOR TO BLOCK, JACK DORSEY FOUNDED TWITTER AND SERVED AS THE COMPANY’S CEO.',
				},
				{
					urlImage: '/episodes/episode3/02.webp',
					title: 'BRIAN GRASSADONIA',
					desc: 'BRIAN GRASSADONIA IS THE EXECUTIVE VP & GENERAL MANAGER OF BLOCK’S CASH APP.',
				},
				{
					urlImage: '/episodes/episode3/03.webp',
					desc: 'JACK DORSEY STANDING OUTSIDE OF THE NEW YORK STOCK EXCHANGE IN NEW YORK ON THURSDAY, NOV. 19, 2015. SQUARE INC.',
					double: true,
				},
				{
					urlImage: '/episodes/episode3/04.webp',
					title: 'ALYSSA HENRY',
					desc: 'ALYSSA HENRY IS THE CEO OF THE SQUARE BUSINESS AT BLOCK. OUTSIDE OF BLOCK, ALYSSA SITS ON THE BOARD OF DIRECTORS OF CONFLUENT.',
				},
				{
					urlImage: '/episodes/episode3/05.webp',
					desc: 'THE SQUARE READER THAT TURNED ANY IPHONE INTO A CREDIT CARD READER',
				},
			],
		},
		eventbrite: {
			bgColor: '#f5571c',
			mainImage: '/episodes/episode4/mainImage.webp',
			title: 'Eventbrite – Julia Hartz',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				"Picture this: You’ve spent 14 years building a company that revolutionized how live events are organized, and are finally approaching profitability. Then a pandemic shuts down live events globally. What do you do? This was the reality Eventbrite CEO Julia Hartz faced as lockdows went into effect in March of 2020. “Even if you have spent 14 years building something, it could truly be gone in 14 days,” she remembers thinking. The company had faced crucible moments before—a change to its pricing model to become profitable without alienating users, and a bold acquisition to expand into live music. Julia relied on the same blend of grit and analytic insight she'd used to navigate these earlier inflection points, and put them to work to reinvent Eventbrite in a pandemic—and emerge ready to enable the future of events.",
			trailer: {
				title: 'JULIA HARTZ / EVENTBRITE',
				quote: `"Because we'd been so focused on democratization and, and enablement, we were almost a victim of our own success, which was we had the widest range of customer segments you could imagine.
	And the issue was that our one-size-fits-all product and pricing was really sort of getting lost in the noise."`,
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/Eventbrite/Victim-of-Success.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode4/01.webp',
					title: 'JULIA HARTZ',
					desc: 'JULIA CO-FOUNDED EVENTBRITE IN 2006 WITH HER HUSBAND KEVIN HARTZ AND CTO RENAUD VISAGE. SHE BECAME CEO IN 2016 AFTER INITIALLY SERVING AS PRESIDENT. OUTSIDE OF EVENTBRITE, HARTZ IS AN INVESTOR IN STARTUPS AND SERVES ON THE BOARD OF FOUR SEASONS HOTELS AND RESORTS.',
				},
				{
					urlImage: '/episodes/episode4/02.webp',
					title: 'KEVIN HARTZ',
					desc: 'KEVIN HARTZ IS THE CO-FOUNDER AND CHAIRMAN OF EVENTBRITE AS WELL AS AN INVESTOR AND ADVISOR TO STARTUPS. PRIOR TO CO-FOUNDING EVENTBRITE, KEVIN SERVED AS THE CO-FOUNDER AND CEO OF XOOM, WHICH WENT PUBLIC AND WAS ACQUIRED BY PAYPAL.',
				},
				{
					urlImage: '/episodes/episode4/03.webp',
					desc: 'JULIA HARTZ IN FRONT OF THE NEW YORK STOCK EXCHANGE THE DAY OF THE IPO',
				},
				{
					urlImage: '/episodes/episode4/04.webp',
					desc: 'THE FIRST EVENTBRITE OFFICE',
				},
			],
		},
		hubspot: {
			bgColor: '#8b4c9e',
			mainImage: '/episodes/episode5/mainImage.webp',
			title: 'HubSpot — Brian Halligan & Dharmesh Shah',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				'When HubSpot co-founders Brian Halligan and Dharmesh Shah met in Boston in 2006, social media and the web as we know it today were just taking shape. Their unique insight would upend traditional approaches to marketing: It was now cheaper and more effective to pull customers in through search engines and social media than to push marketing materials out through ads and telemarketers. They tested their ideas with a blog started as a hobby, and coined their new approach “inbound marketing.” 17 years later, the ideas behind that blog are a $20+ billion success story, and HubSpot is synonymous with the inbound marketing category. From committing to serve small businesses over large enterprises to taking on a Goliath in a new category, the founders explain how the crucible moments that defined their journey hinge on defying conventional wisdom. ',
			trailer: {
				title: 'BRIAN HALLIGAN / HUBSPOT',
				quote: `“I asked them, you know, “What’s your go-to-market plan?” And they all did the same thing. They all bought a list and they sent emails. They bought a list and they cold-called. They did a lot of advertising. They"`,
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/Hubspot/Go-To-market-Plan-%28inbound-shortened%29.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode5/02.webp',
					title: 'BRIAN HALLIGAN',
					desc: 'BRIAN HALLIGAN IS THE CO-FOUNDER AND EXECUTIVE CHAIRPERSON OF HUBSPOT. IN 2022 HE FOUNDED PROPELLER VENTURES, A CLIMATE TECH VENTURE FUND, AND SERVES ON THE BOARDS OF NAVIER AND AQUATIC LABS.',
				},
				{
					urlImage: '/episodes/episode5/03.webp',
					title: 'DHARMESH SHAH',
					desc: 'DHARMESH SHAH IS CO-FOUNDER AND CTO OF HUBSPOT. PRIOR TO FOUNDING HUBSPOT HE FOUNDED PYRAMID DIGITAL SOLUTIONS, WHICH WAS ACQUIRED BY SUNGARD DATA SYSTEMS IN 2005. ',
				},
				{
					urlImage: '/episodes/episode5/04.webp',
					title: 'DANNIE HERZBERG',
					desc: 'DANNIE HERZBERG IS A PARTNER ON THE GROWTH TEAM AT SEQUOIA. PRIOR TO JOINING SEQUOIA SHE HELPED BUILD AND SCALE HUBSPOT AND SLACK.',
				},
				{
					urlImage: '/episodes/episode5/05.webp',
					title: 'PAT GRADY',
					desc: 'PAT GRADY IS A PARTNER ON THE GROWTH TEAM AT SEQUOIA. HE SITS ON THE BOARD OF COMPANIES LIKE AMPLITUDE, ATTENTIVE AND HARVEY.',
				},
				{
					urlImage: '/episodes/episode5/06.webp',
					desc: 'HUBSPOT IPO',
					double: true,
				},
				{
					urlImage: '/episodes/episode5/07.webp',
					desc: 'HUBSPOTTERS RELEASE 15,000 ORANGE PING PONG BALLS INTO HQ’S ATRIUM TO CELEBRATE THE COMPANY’S 15,000 CUSTOMER MILESTONE.',
				},
				{
					urlImage: '/episodes/episode5/08.webp',
					desc: "BRIAN HALLIGAN AND DHARMESH SHAH ATTENDED BUSINESS SCHOOL TOGETHER AT MIT'S SLOAN SCHOOL OF MANAGEMENT",
				},
			],
		},
		jawbone: {
			bgColor: '#e8599e',
			mainImage: '/episodes/episode6/mainImage.webp',
			title: 'Jawbone — Hosain Rahman',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				'One of the most innovative companies of the mid-2000s, Jawbone revolutionized sound with the first smart bluetooth headset and then with Jambox, the first smart wireless speaker. And it pioneered wearable technology with UP, the first wrist-worn fitness tracker. But product malfunctions, weak gross margins, inflated valuations and financing troubles would reverse Jawbone’s meteoric rise. In one of the most dramatic turns in Silicon Valley history, the company went from a nearly $4 billion valuation to liquidation. This rich cautionary tale holds valuable lessons for founders today. In a new era of capital constraints, Jawbone’s story is more relevant now than ever. Co-founders Hosain Rahman and Alex Asseily, and Creative Director Yves Behar, share what they learned along the way.',
			trailer: {
				title: 'HOSAIN RAHMAN / JAWBONE',
				quote:
					"“So, you guys want, like, the raw answer? Like, it doesn't leave you. Guys like me don't like to fail, man. We invented three categories that, now, like, billions of people use. That doesn't happen without what we did. That was all us, right? Wireless",
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/Hubspot/You-feel-all-of-those-things.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode6/01.webp',
					title: 'HOSAIN RAHMAN',
					desc: 'HOSAIN RAHMAN IS THE FORMER CO-FOUNDER AND CEO OF JAWBONE. IN 2017, HE FOUNDED ALL.HEALTH, WHERE HE SERVES AS THE COMPANY’S CEO TODAY.',
				},
				{
					urlImage: '/episodes/episode6/02.webp',
					title: 'ALEX ASSEILY',
					desc: 'ALEX ASSEILY IS A FORMER CO-FOUNDER OF JAWBONE. SINCE JAWBONE, HE HAS CO-FOUNDED TWO COMPANIES––ZULU GROUP AND ELVIE––WHILE INVESTING IN AND ADVISING TECHNOLOGY STARTUPS.',
				},
				{
					urlImage: '/episodes/episode6/03.webp',
					title: 'YVES BEHAR',
					desc: 'YVES BEHAR IS AN INTERNATIONALLY CELEBRATED DESIGNER AND THE FOUNDER OF FUSEPROJECT, AN INDUSTRIAL DESIGN AND BRAND DESIGN FIRM. HE SERVED AS CHIEF CREATIVE OFFICER AT JAWBONE.',
				},
				{
					urlImage: '/episodes/episode6/04.webp',
					desc: 'YVES BEHAR IN THE STUDIO',
				},
				{
					urlImage: '/episodes/episode6/05.webp',
					desc: 'JAWBONE BRACELET',
					double: true,
				},
			],
		},
		'23andme': {
			bgColor: '#1f8ac4',
			mainImage: '/episodes/episode7/mainImage.webp',
			title: '23andMe – Anne Wojcicki',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				'Millions of customers have explored their genome with 23andMe. But when the company started in 2006, the idea of consumer DNA testing was heresy to the medical establishment. The FDA even ordered 23andMe to stop selling its health testing product. The company persevered to make allies out of adversaries, and became the only FDA-approved product on the market. Learn how 23andMe defined the DNA testing category, how it found product-market fit, and used its growing scale to enter the massive new field of drug discovery.',
			trailer: {
				title: 'ANNE WOJCICKI / 23ANDME',
				quote:
					'“I think that the biggest lesson from the crucible moment was, you know, like, the world does change. And the way it changes is not, like, the regulators see an aha moment and they change. It’s like,"',
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/23andMe/CM+7+23andMe+Lessons.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode7/01.webp',
					title: 'ANNE WOJCICKI',
					desc: 'ANNE WOJCICKI IS THE FOUNDER AND CEO OF 23ANDME. SHE ALSO COFOUNDED THE BREAKTHROUGH PRIZE, WHERE SHE SITS ON THE BOARD. PREVIOUSLY SHE SPENT A DECADE INVESTING IN BIOTECH COMPANIES.',
				},
				{
					urlImage: '/episodes/episode7/02.webp',
					title: 'RICHARD SCHELLER',
					desc: 'RICHARD SCHELLER SITS ON THE BOARD OF 23ANDME, AND FOUNDED THE COMPANY’S RESEARCH AND THERAPEUTIC DEVELOPMENT TEAM. PRIOR TO JOINING 23ANDME, HE WAS AN EXECUTIVE AT GENENTECH AND ROCHE.',
				},
				{
					urlImage: '/episodes/episode7/03.webp',
					desc: 'ANNE WOJCICKI IN THE LAB',
					double: true,
				},
				{
					urlImage: '/episodes/episode7/04.webp',
					desc: 'TEST KIT FOR GENETIC TESTING BY 23ANDME.',
				},
				{
					urlImage: '/episodes/episode7/05.webp',
					desc: 'ANNE WOJCICKI WITH EARLY TEAM WORKING OUT OF A SMALL OFFICE IN PALO ALTO,',
				},
				{
					urlImage: '/episodes/episode7/06.webp',
					desc: '23ANDME IPO IN JUNE 2021',
					double: true,
				},
			],
		},
		nvidia: {
			bgColor: '#007354',
			mainImage: '/episodes/episode8/mainImage.webp',
			title: 'Nvidia — Jensen Huang',
			listenNowOn: ['#', '#', '#', '#', '#'],
			secondTitle:
				'Crucible Moments is a podcast series about the inflection points that shaped some of the most important companies of our time.',
			subTitle:
				'The AI revolution has been the biggest story in technology over the last year, as the stuff of science fiction turned into reality seemingly overnight. At the center of it all is Nvidia, a company that until a few years ago was known mostly for video game graphics. A full decade before ChatGPT launched, Nvidia began mobilizing to power the computing potential of AI. Nvidia’s pivot toward AI computing is one of the boldest business pivots in history. Hear the whole story directly from founder and CEO Jensen Huang, along with longtime board member Mark Stevens and AI luminary Andrew Ng.',
			trailer: {
				title: 'JENSEN HUANG / NVIDIA',
				quote:
					'“This was a giant pivot for our company. We’re adding cost, we’re adding people, we have to learn new skills. It took our attention away from our normal day-to-day competition in computer graphics and"',
				audioUrl:
					'https://arc-us.s3.amazonaws.com/audio/Episodes/nvidia/CM8+Pivot+in+a+new+direction.mp3',
			},
			items: [
				{
					urlImage: '/episodes/episode8/01.webp',
					title: 'JENSEN HUANG',
					desc: 'JENSEN HUANG COFOUNDED NVIDIA IN 1993 AND HAS SINCE SERVED AS THE COMPANY’S PRESIDENT, CHIEF EXECUTIVE OFFICER, AND MEMBER OF THE BOARD OF DIRECTORS.',
				},
				{
					urlImage: '/episodes/episode8/02.webp',
					title: 'CHRIS MALACHOWSKY',
					desc: 'CHRIS MALACHOWSKY IS THE COFOUNDER OF NVIDIA AND ITS SENIOR VICE PRESIDENT AND FELLOW. BEYOND HIS TECHNICAL ACCOMPLISHMENTS, MALACHOWSKY ALSO RECEIVED AN EMMY FOR THE FILM “INHERITANCE,” WHICH WON BEST DOCUMENTARY IN 2009.',
				},
				{
					urlImage: '/episodes/episode8/03.webp',
					title: 'ANDREW NG',
					desc: 'ANDREW NG IS A STANFORD UNIVERSITY COMPUTER SCIENTIST AND FORMER DIRECTOR OF GOOGLE BRAIN, WHOSE RESEARCH WAS CRITICAL TO VALIDATING NVIDIA’S PIVOT INTO THE FIELD OF AI. HE IS THE MANAGING PARTNER OF AI FUNDS AND LEADS BOTH DEEPLEARNING.AI AND LANDING AI.',
				},
				{
					urlImage: '/episodes/episode8/04.webp',
					title: 'MARK A. STEVENS',
					desc: 'MARK STEVENS WAS THE SEQUOIA PARTNER WHO JOINED NVIDIA’S BOARD IN 1993. HE HAS SINCE LEFT SEQUOIA, BUT REMAINS ON NVIDIA’S BOARD. PRESENTLY HE IS THE MANAGING PARTNER OF S-CUBED CAPITAL, HIS FAMILY OFFICE.',
				},
				{
					urlImage: '/episodes/episode8/05.webp',
					title: 'ALFRED LIN',
					desc: 'ALFRED LIN IS A PARTNER AT SEQUOIA ON THE SEED/EARLY TEAM. HE SERVES ON THE BOARDS OF AIRBNB, DOORDASH, HOUZZ, ZIPLINE AND MORE.',
				},
				{
					urlImage: '/episodes/episode8/06.webp',
					desc: 'CURTIS PRIEM GAMING IN THE NVIDIA OFFICE, 1993',
				},
				{
					urlImage: '/episodes/episode8/07.webp',
					desc: "THE DENNY'S ROADSIDE DINER IN EAST SAN JOSE, WHERE NVIDIA'S THREE CO-FOUNDERS AGREED TO START THE COMPANY IN 1993",
				},
				{
					urlImage: '/episodes/episode8/08.webp',
					desc: `THE GEFORCE 256 IS THE ORIGINAL RELEASE IN NVIDIA'S "GEFORCE" PRODUCT-LINE.`,
				},
				{
					urlImage: '/episodes/episode8/09.webp',
					desc: 'NVIDIA’S FIRST COMMERCIAL OFFICE - 1208 E. ARQUES AVE, SUNNYVALE, CA',
					double: true,
				},
				{
					urlImage: '/episodes/episode8/10.webp',
					desc: 'JENSEN HUANG AT THE SUNNYVALE OFFICE IN 1994',
					double: true,
				},
			],
		},
	}

	const episode = episodes[id]

	if (!episode) return null
	return episode
}
