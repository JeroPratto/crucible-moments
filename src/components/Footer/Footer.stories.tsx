import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6'

const meta = {
	title: 'Components/Footer',
	component: Footer,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof Footer>

export const Default = {} satisfies Story
