import React, { useRef } from 'react'
import styles from './EnterYourEmail.module.css'

export type EnterYourEmailProps = {
	color: string
	bgColor?: string
}

const EnterYourEmail: React.FC<EnterYourEmailProps> = ({
	color,
	bgColor = 'transparent',
}) => {
	const handleSubmitEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (emailInput.current) {
			console.log(emailInput.current.value)
			emailInput.current.value = ''
		}
	}
	const emailInput = useRef<HTMLInputElement>(null)
	return (
		<div className={styles.container} style={{ backgroundColor: bgColor }}>
			<p className={styles.title} style={{ color: color }}>
				Subscribe below and get notified when new episodes go live.
			</p>
			<form className={styles.form} onSubmit={handleSubmitEmail}>
				<input type='email' placeholder='Enter your email' ref={emailInput} />
				<button>Subscribe</button>
			</form>
		</div>
	)
}

export default EnterYourEmail
