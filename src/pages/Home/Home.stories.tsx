import type { Meta, StoryObj } from '@storybook/react'
import Home from './Home'
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6'

const meta = {
	title: 'Pages/Home/Home',
	component: Home,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
	argTypes: {},
} satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof Home>

export const Default = {
	args: {},
} satisfies Story
