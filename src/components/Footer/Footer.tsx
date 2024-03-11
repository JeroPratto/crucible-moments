import React from 'react'
import styles from './Footer.module.css'
import logo from '/footer/logo-footer.svg'
import { Link } from 'react-router-dom'

export type FooterProps = {
	// types...
}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className={`${styles.footer} footer-color`}>
			<Link to='/'>
				<img src={logo} alt='Go to home page' />
			</Link>
		</footer>
	)
}

export default Footer
