import type { Meta, StoryObj } from '@storybook/react'
import ListenNowOn from './ListenNowOn'
import '@/index.css'

const meta = {
	title: 'Components/ListenNowOn',
	component: ListenNowOn,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			values: [
				{ name: 'white', value: '#fff' },
				{ name: 'dark', value: '#000' },
			],
		},
	},
	argTypes: {},
} satisfies Meta<typeof ListenNowOn>

export default meta

type Story = StoryObj<typeof ListenNowOn>

export const WhiteMode = {
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
	args: {
		urlList: ['#', '#', '#', '#', '#'],
		blackMode: false,
	},
} satisfies Story

export const BlackMode = {
	parameters: {
		backgrounds: {
			default: 'white',
		},
	},
	args: {
		urlList: ['#', '#', '#', '#', '#'],
		blackMode: true,
		principal: '#000',
		secondary: '#fff',
	},
}
