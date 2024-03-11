import type { Meta, StoryObj } from '@storybook/react'
import Episode from './Episode'
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6'

const meta = {
	title: 'Pages/Episode',
	component: Episode,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
		reactRouter: reactRouterParameters({
			routing: { path: '/episodes/:id' },
		}),
	},
} satisfies Meta<typeof Episode>

export default meta

type Story = StoryObj<typeof Episode>

export const Paypal = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { id: 'paypal' },
			},
		}),
	},
} satisfies Story
export const Airbnb = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { id: 'airbnb' },
			},
		}),
	},
}
