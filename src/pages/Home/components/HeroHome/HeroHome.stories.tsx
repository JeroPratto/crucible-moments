import type { Meta, StoryObj } from '@storybook/react'
import HeroHome from './HeroHome'
import '@/index.css'
const meta = {
	title: 'Pages/Home/components/HeroHome',
	component: HeroHome,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof HeroHome>

export default meta

type Story = StoryObj<typeof HeroHome>

export const Default = {} satisfies Story
