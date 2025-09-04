import { Suspense } from 'react';
import './App.css';
import Lenis from 'lenis';

import { PrimaryHeader } from './components/header';
import { Outlet } from 'react-router-dom';

function App() {
	// Initialize Lenis
	const lenis = new Lenis({
		autoRaf: true,
	});

	// Listen for the scroll event and log the event data
	// lenis.on('scroll', (e) => {
	// 	console.log(e);
	// });
	return (
		<Suspense fallback={<div>hello world</div>}>
			<PrimaryHeader />
			<Outlet />
		</Suspense>
	);
}

export default App;
