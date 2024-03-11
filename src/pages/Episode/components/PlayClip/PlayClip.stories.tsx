import type { Meta, StoryObj } from '@storybook/react'
import PlayClip from './PlayClip'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
	title: 'Pages/Episode/Components/PlayClip',
	component: PlayClip,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			values: [
				{ name: 'white', value: '#fff' },
				{ name: 'yellow', value: 'rgb(250, 178, 58)' },
			],
		},
	},
	argTypes: {
		title: { control: 'text' },
		audioUrl: { control: 'text' },
		quote: { control: 'text' },
	},
} satisfies Meta<typeof PlayClip>

export default meta

type Story = StoryObj<typeof PlayClip>

const ArgsMock = {
	quote:
		'“A host in San Francisco named EJ reported that somebody stayed in her home and ransacked it. And it became viral. Suddenly, there was this massive"',
	title: 'BRIAN CHESKY / AIRBNB',
	audioUrl:
		'https://arc-us.s3.amazonaws.com/audio/Episodes/Airbnb/Ransackgate.mp3',
}
export const Default = {
	args: { ...ArgsMock },
	parameters: {
		backgrounds: {
			default: 'yellow',
		},
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByText(ArgsMock.title)
		const quote = canvas.getByText(ArgsMock.quote)
		const audio = canvas.getByTestId('play-clip-audio') as HTMLAudioElement
		const source = audio.querySelector('source')
		const button = canvas.getByTestId('play-clip-episode')

		expect(title).toBeInTheDocument()
		expect(quote).toBeInTheDocument()
		expect(source).toBeInTheDocument()
		expect(source!.src === args.audioUrl).toBe(true)
		expect(button.ariaLabel === 'Play Clip').toBe(true)
		await userEvent.click(button)
		expect(button.ariaLabel === 'Pause Clip').toBe(true)
		await userEvent.click(button)
		expect(button.ariaLabel === 'Play Clip').toBe(true)
	},
} satisfies Story
