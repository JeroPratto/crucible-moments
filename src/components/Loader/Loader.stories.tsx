import type { Meta, StoryObj } from '@storybook/react'
import Loader from './Loader'

const meta = {
	title: 'components/Loader',
	component: Loader,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof Loader>

export const Default = {} satisfies Story
