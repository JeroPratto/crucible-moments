export const ChangeFooterColor = (color: string = '#000') => {
	document.documentElement.style.setProperty('--footer-color', color)
}
