export interface ListenNowList {
	label: string
	icon: ({
		principal,
		secondary,
	}: {
		principal?: string
		secondary?: string
	}) => JSX.Element
}
