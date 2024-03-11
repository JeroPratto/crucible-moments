import type { Meta, StoryObj } from '@storybook/react'
import EpisodeCard from './EpisodeCard'
import '@/index.css'
import { getEpisodes } from '../EpisodeCardList/utils/getEpisodes'
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6'
const meta = {
	title: 'Pages/Home/components/EpisodeCard',
	component: EpisodeCard,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
	argTypes: {},
} satisfies Meta<typeof EpisodeCard>

export default meta

type Story = StoryObj<typeof EpisodeCard>

const episodes = getEpisodes()
export const Default = {
	args: {
		episode: episodes[0],
	},
} satisfies Story
