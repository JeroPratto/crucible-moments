import type { Meta, StoryObj } from '@storybook/react'
import EpisodeHero from './EpisodeHero'
import { expect, within } from '@storybook/test'

const meta = {
	title: 'Pages/Episode/Components/EpisodeHero',
	component: EpisodeHero,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof EpisodeHero>

export default meta

type Story = StoryObj<typeof EpisodeHero>

const ArgsMock = {
	urlImage: '/episodes/episode1/mainImage.webp',
	title: 'PayPal - Max Levchin',
}

export const Default = {
	args: { title: ArgsMock.title, urlImage: ArgsMock.urlImage },
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByText(ArgsMock.title)
		const image = canvas.getByTestId('episode-hero-image') as HTMLImageElement
		const urlImage = new URL(image.src)
		expect(title).toBeInTheDocument()
		expect(urlImage.pathname === ArgsMock.urlImage).toBe(true)
	},
} satisfies Story
