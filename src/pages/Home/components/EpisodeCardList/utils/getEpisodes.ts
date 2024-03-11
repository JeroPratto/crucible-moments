import { Episode } from '@/types/EpisodeCard'

export const getEpisodes = (): Episode[] => {
	const data = [
		{
			title: 'PayPal - Max Levchin',
			numberEpisode: '1',
			goToEpisode: '/episodes/paypal',
			urlImage: '/episodes/episode1.webp',
			bgColor: 'rgb(250, 178, 58)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Frontpage/Episodes/Paypal-clip.mp3',
		},
		{
			title: 'Airbnb - Brian Chesky',
			numberEpisode: '2',
			goToEpisode: '/episodes/airbnb',
			urlImage: '/episodes/episode2.webp',
			bgColor: 'rgb(235, 41, 38)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Episodes/Airbnb/AirBnb-Intro.mp3',
		},
		{
			title: 'Block - Jack Dorsey',
			numberEpisode: '3',
			goToEpisode: '/episodes/block',
			urlImage: '/episodes/episode3.webp',
			bgColor: 'rgb(176, 99, 0)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Episodes/Block/Willing-to-lose-credibility.mp3',
		},
		{
			title: 'Eventbrite - Julia Hartz',
			numberEpisode: '4',
			goToEpisode: '/episodes/eventbrite',
			urlImage: '/episodes/episode4.webp',
			bgColor: 'rgb(245, 87, 28)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Episodes/Eventbrite/Freefall.mp3',
		},
		{
			title: 'HubSpot - Brian & Dharmesh',
			numberEpisode: '5',
			goToEpisode: '/episodes/hubspot',
			urlImage: '/episodes/episode5.webp',
			bgColor: 'rgb(139, 76, 158)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Episodes/Hubspot/Defining-a-Price-Point.mp3',
		},
		{
			title: 'Jawbone - Hosain Rahman',
			numberEpisode: '6',
			goToEpisode: '/episodes/jawbone',
			urlImage: '/episodes/episode6.webp',
			bgColor: 'rgb(232, 89, 158)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Episodes/Hubspot/Capturing-imagination-through-design.mp3',
		},
		{
			title: '23andMe - Anne Wojcicki',
			numberEpisode: '7',
			goToEpisode: '/episodes/23andme',
			urlImage: '/episodes/episode7.webp',
			bgColor: 'rgb(31, 138, 196)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Episodes/23andMe/CM+7+23%26Me+Intro.mp3',
		},
		{
			title: 'Nvidia — Jensen Huang',
			numberEpisode: '8',
			goToEpisode: '/episodes/nvidia',
			urlImage: '/episodes/episode8.webp',
			bgColor: 'rgb(0, 115, 84)',
			urlAudio:
				'https://arc-us.s3.amazonaws.com/audio/Episodes/nvidia/CM8+How+do+you+build+the+perfect+chip.mp3',
		},
	]
	return data
}
