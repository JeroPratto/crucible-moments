export interface EpisodeItem {
	bgColor: string
	mainImage: string
	title: string
	listenNowOn: string[]
	secondTitle: string
	subTitle: string
	trailer: {
		title: string
		quote: string
		audioUrl: string
	}
	items: {
		urlImage: string
		title?: string
		desc?: string
		double?: boolean
	}[]
}
export interface Episodes {
	[key: string]: EpisodeItem
}
