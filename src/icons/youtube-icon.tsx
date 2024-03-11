export const YoutubeIcon = ({
	principal = '#fff',
	secondary = '#000',
}: {
	principal?: string
	secondary?: string
}) => {
	return <YoutubeComponent principal={principal} secondary={secondary} />
}

const YoutubeComponent = ({
	principal,
	secondary,
}: {
	principal: string
	secondary: string
}) => {
	return (
		<svg
			width='22'
			height='16'
			viewBox='0 0 22 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M21.54 2.70383C21.2865 1.75668 20.5421 1.01236 19.5949 0.758821C17.88 0.298828 11 0.298828 11 0.298828C11 0.298828 4.12002 0.298828 2.405 0.758821C1.45785 1.01236 0.713533 1.75668 0.459993 2.70383C1.37693e-07 4.41884 0 7.99919 0 7.99919C0 7.99919 1.37693e-07 11.5795 0.459993 13.2946C0.713533 14.2417 1.45785 14.986 2.405 15.2395C4.12002 15.6995 11 15.6995 11 15.6995C11 15.6995 17.88 15.6995 19.5949 15.2395C20.5421 14.986 21.2865 14.2417 21.54 13.2946C22 11.5795 22 7.99919 22 7.99919C22 7.99919 21.9982 4.41884 21.54 2.70383Z'
				fill={principal}
			></path>
			<path
				d='M8.79785 11.2985L14.5134 7.99888L8.79785 4.69922V11.2985Z'
				fill={secondary}
			></path>
		</svg>
	)
}
