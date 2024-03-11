import type { Meta, StoryObj } from '@storybook/react'
import AnimateSoundWave from './AnimateSoundWave'
import '@/index.css'
const meta = {
	title: 'Components/AnimateSoundWave',
	component: AnimateSoundWave,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			values: [{ name: 'dark', value: '#000' }],
		},
	},
	argTypes: {
		isPlay: { control: 'boolean' },
	},
} satisfies Meta<typeof AnimateSoundWave>

export default meta

type Story = StoryObj<typeof AnimateSoundWave>

export const Pause = {
	args: { isPlay: false },
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
}

export const Play = {
	args: { isPlay: true },
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
} satisfies Story
