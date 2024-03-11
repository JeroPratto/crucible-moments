import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import EpisodeItemGrid from './EpisodeItemGrid'
import '@/index.css'

const meta = {
	title: 'Pages/Episode/Components/EpisodeItemGrid',
	component: EpisodeItemGrid,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		title: { control: 'text' },
		desc: { control: 'text' },
		urlImage: { control: 'text' },
	},
} satisfies Meta<typeof EpisodeItemGrid>

export default meta

type Story = StoryObj<typeof EpisodeItemGrid>

const ArgsMock = {
	urlImage: '/episodes/episode1/mainImage.webp',
	title: 'MAX LEVCHIN',
	desc: 'MAX LEVCHIN COFOUNDED PAYPAL IN 1997 AT THE AGE OF 23. LIKE OTHERS IN THE "PAYPAL MAFIA," MAX HAS SINCE FOUNDED AND FUNDED NUMEROUS COMPANIES AROUND THE WORLD. HE CURRENTLY SERVES AS THE FOUNDER AND CEO OF AFFIRM, A NEXT-GENERATION CREDIT CARD NETWORK.',
}

export const TitleAndDesc = {
	args: { ...ArgsMock },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByText(ArgsMock.title)
		const desc = canvas.getByText(ArgsMock.desc)
		const image = canvas.getByTestId(
			'episode-item-grid-image',
		) as HTMLImageElement

		const urlImage = new URL(image.src)

		expect(title).toBeInTheDocument()
		expect(desc).toBeInTheDocument()
		expect(urlImage.pathname === ArgsMock.urlImage).toBe(true)
	},
} satisfies Story

export const OnlyTitle = {
	args: { title: ArgsMock.title, urlImage: ArgsMock.urlImage },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByText(ArgsMock.title)
		const desc = canvas.queryByText(ArgsMock.desc)

		expect(title).toBeInTheDocument()
		expect(desc).toBeNull()
	},
} satisfies Story

export const OnlyDesc = {
	args: { desc: ArgsMock.desc, urlImage: ArgsMock.urlImage },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.queryByText(ArgsMock.title)
		const desc = canvas.getByText(ArgsMock.desc)

		expect(desc).toBeInTheDocument()
		expect(title).toBeNull()
	},
} satisfies Story
