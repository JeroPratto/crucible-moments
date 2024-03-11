import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Suspense, lazy, useEffect } from 'react'
import { Loader } from './components/Loader'

function App() {
	const Episode = lazy(() => import('./pages/Episode/Episode'))
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<ScrollTop />
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/episodes/:id' element={<Episode />} />
				</Routes>
				<Footer />
			</Suspense>
		</BrowserRouter>
	)
}

export default App

const ScrollTop = () => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}
