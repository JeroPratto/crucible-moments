import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6'
import Header from './Header'
import '@/index.css'

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const Home = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: { path: '/' },
		}),
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement)
		const HomeButton = canvas.queryByTestId('return-home-button')
		const AllEpisodes = canvas.getByTestId('button-all-episodes')
		const MenuWrapper = canvas.getByTestId('menu-wrapper')
		const CloseWrapperButton = MenuWrapper.querySelector('button')
		expect(HomeButton).toBeNull()
		expect(MenuWrapper).toHaveStyle('display:none')
		await userEvent.click(AllEpisodes)
		expect(MenuWrapper).toHaveStyle('display:flex')
		await userEvent.click(CloseWrapperButton)
		expect(MenuWrapper).toHaveStyle('display:none')
	},
} satisfies Story

export const NotInHome = {
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/test' },
		}),
	},
	play: ({ args, canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.queryByTestId('return-home-button')
		expect(button).toBeInTheDocument()
	},
} satisfies Story
