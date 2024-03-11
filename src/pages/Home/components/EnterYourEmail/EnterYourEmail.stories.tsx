import type { Meta, StoryObj } from '@storybook/react'
import EnterYourEmail from './EnterYourEmail'
import '@/index.css'

const meta = {
	title: 'Pages/Home/components/EnterYourEmail',
	component: EnterYourEmail,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof EnterYourEmail>

export default meta

type Story = StoryObj<typeof EnterYourEmail>

export const Default = {} satisfies Story
