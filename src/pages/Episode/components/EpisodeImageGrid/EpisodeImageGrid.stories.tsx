import type { Meta, StoryObj } from '@storybook/react'
import '@/index.css'
import EpisodeImageGrid from './EpisodeImageGrid'

const meta = {
	title: 'Pages/Episode/Components/EpisodeImageGrid',
	component: EpisodeImageGrid,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof EpisodeImageGrid>

export default meta
const mockItems = [
	{
		urlImage: '/episodes/episode1/01.webp',
		title: 'MAX LEVCHIN',
		desc: 'MAX LEVCHIN COFOUNDED PAYPAL IN 1997 AT THE AGE OF 23. LIKE OTHERS IN THE "PAYPAL MAFIA," MAX HAS SINCE FOUNDED AND FUNDED NUMEROUS COMPANIES AROUND THE WORLD. HE CURRENTLY SERVES AS THE FOUNDER AND CEO OF AFFIRM, A NEXT-GENERATION CREDIT CARD NETWORK.',
	},
	{
		urlImage: '/episodes/episode1/02.webp',
		title: 'DAVE GAUSEBECK',
		desc: 'DAVE GAUSEBECK JOINED PAYPAL WHEN THE ENTIRE COMPANY FIT INTO A SINGLE CONFERENCE ROOM AND, WHILE THERE, CO-DEVELOPED THE FIRST COMMERCIAL IMPLEMENTATION OF A CAPTCHA. HE NOW LEADS TECHNOLOGICAL RESEARCH AND OPERATIONS AT MATTERPORT, A SPATIAL COMPUTING PLATFORM HE FOUNDED IN 2011.',
	},
	{
		urlImage: '/episodes/episode1/03.webp',
		title: 'MICHAEL MORITZ',
		desc: 'MICHAEL MORITZ WAS THE SEQUOIA PARTNER WHO JOINED THE BOARD OF PAYPAL IN 1999. AFTER 38 YEARS WITH SEQUOIA CAPITAL, MICHAEL NOW SERVES AS AN ADVISOR TO SEQUOIA HERITAGE AND AS PRESIDENT OF HIS FAMILY FOUNDATION, CRANKSTART. ',
	},
	{
		urlImage: '/episodes/episode1/04.webp',
		title: 'JIMMI SONI',
		desc: 'JIMMY SONI IS AN AWARD-WINNING AUTHOR. HIS LATEST BOOK IS "THE FOUNDERS: THE STORY OF PAYPAL AND THE ENTREPRENEURS WHO SHAPED SILICON VALLEY." HIS PREVIOUS BOOK, "A MIND AT PLAY: HOW CLAUDE SHANNON INVENTED THE INFORMATION AGE," WON THE 2017 NEUMANN PRIZE.',
	},
	{
		urlImage: '/episodes/episode1/05.webp',
		desc: 'THE PAYPAL TEAM CELEBRATING THEIR 2002 IPO: PETER THIEL (RIGHT) AND ROELOF BOTHA PLAY CHESS.',
		double: true,
	},
	{
		urlImage: '/episodes/episode1/06.webp',
		desc: 'JANUARY 1999. PROBABLY FIRST PAYPAL COMPANY PICTURE EVER TAKEN. FIELDLINK, INC; BUILDING SECURITY SOFTWARE FOR HANDHELD DEVICES.',
	},
	{
		urlImage: '/episodes/episode1/07.webp',
		desc: 'SUMMER 2002. JUST DAYS BEFORE THE EBAY ACQUISITION NEGOTIATIONS START.',
	},
	{
		urlImage: '/episodes/episode1/08.webp',
		desc: 'ROELOF BOTHA WITH MAX LEVCHIN.',
	},
	{
		urlImage: '/episodes/episode1/09.webp',
		desc: 'NASDAQ’S COMMEMORATIVE CAKE FOR PAYPAL ON THE DAY OF THE COMPANY’S IPO.',
	},
]

type Story = StoryObj<typeof EpisodeImageGrid>

export const Default = {
	args: {
		items: mockItems,
	},
} satisfies Story
