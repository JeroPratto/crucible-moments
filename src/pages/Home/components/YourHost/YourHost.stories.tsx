import type { Meta, StoryObj } from '@storybook/react'
import YourHost from './YourHost'

const meta = {
	title: 'Pages/Home/components/YourHost',
	component: YourHost,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof YourHost>

export default meta

type Story = StoryObj<typeof YourHost>

export const Default = {
	args: {
		// props
	},
} satisfies Story
