import type { Meta, StoryObj } from '@storybook/react'
import FeaturedGrid from './FeaturedGrid'
import '@/index.css'
const meta = {
	title: 'Pages/Home/components/FeaturedGrid',
	component: FeaturedGrid,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof FeaturedGrid>

export default meta

type Story = StoryObj<typeof FeaturedGrid>

export const Default = {} satisfies Story
