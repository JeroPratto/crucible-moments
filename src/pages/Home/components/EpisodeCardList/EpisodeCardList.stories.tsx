import type { Meta, StoryObj } from '@storybook/react'
import EpisodeCardList from './EpisodeCardList'
import '@/index.css'
import { getEpisodes } from './utils/getEpisodes'
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6'
const meta = {
	title: 'Pages/Home/components/EpisodeCardList',
	component: EpisodeCardList,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
	argTypes: {
		episodes: { control: 'array' },
	},
} satisfies Meta<typeof EpisodeCardList>

export default meta

type Story = StoryObj<typeof EpisodeCardList>

const episodes = getEpisodes()
export const Default = {
	args: {
		episodes: episodes,
	},
} satisfies Story
