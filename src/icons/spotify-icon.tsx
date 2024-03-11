export const SpotifyIcon = ({ principal = '#fff' }: { principal?: string }) => {
	return <SpotifyComponent principal={principal} />
}

const SpotifyComponent = ({ principal = '#fff' }: { principal?: string }) => {
	return (
		<svg
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5.99996 0C2.68635 0 0 2.68634 0 6.00004C0 9.31388 2.68635 12 5.99996 12C9.31394 12 12 9.31388 12 6.00004C12 2.68655 9.31394 0.000286595 5.99989 0.000286595L5.99996 0ZM8.75151 8.65377C8.64404 8.83003 8.41333 8.88592 8.23708 8.77773C6.82835 7.91722 5.05494 7.72234 2.96642 8.19952C2.76516 8.24537 2.56455 8.11927 2.51869 7.91794C2.47262 7.7166 2.59822 7.51599 2.79998 7.47013C5.08553 6.94795 7.04602 7.17279 8.62756 8.13933C8.80381 8.24752 8.8597 8.47752 8.75151 8.65377ZM9.48589 7.02003C9.35048 7.24014 9.06246 7.30964 8.8425 7.17422C7.22972 6.18288 4.77128 5.89579 2.86367 6.47485C2.61627 6.54958 2.35498 6.41015 2.27989 6.16318C2.20538 5.91578 2.34487 5.65497 2.59184 5.57974C4.77085 4.91856 7.47977 5.23884 9.33185 6.37698C9.55181 6.5124 9.62131 6.80036 9.48589 7.02003ZM9.54894 5.3188C7.61518 4.17019 4.42473 4.06458 2.57845 4.62495C2.28197 4.71487 1.96844 4.54749 1.87859 4.25101C1.78875 3.95438 1.95597 3.64106 2.25266 3.55093C4.37206 2.90752 7.89532 3.03183 10.1217 4.35354C10.3889 4.51181 10.4763 4.85623 10.318 5.12255C10.1604 5.38923 9.81504 5.47714 9.54923 5.3188H9.54894Z'
				fill={principal}
			></path>
		</svg>
	)
}