export const GoogleIcon = ({ principal = '#fff' }: { principal?: string }) => {
	return <GoogleComponent principal={principal} />
}
const GoogleComponent = ({ principal = '#fff' }: { principal?: string }) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.32648 6.8314V9.36746H11.9404C11.4679 10.904 10.1836 12.0037 8.32648 12.0037C6.11498 12.0037 4.32228 10.211 4.32228 8.00021C4.32228 5.78936 6.11498 3.99667 8.32648 3.99667C9.32073 3.99667 10.2287 4.36105 10.9289 4.96105L12.7966 3.09335C11.6172 2.01879 10.0482 1.36304 8.32648 1.36304C4.66011 1.36304 1.68799 4.3345 1.68799 8.00021C1.68799 11.6659 4.66011 14.6374 8.32648 14.6374C13.8991 14.6374 15.1289 9.4272 14.5827 6.84003L8.32648 6.8314Z'
				fill={principal}
			></path>
		</svg>
	)
}
