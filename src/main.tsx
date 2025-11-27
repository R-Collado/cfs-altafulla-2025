import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './18n.js';
import App from './App.tsx';
import { BlogPage } from './pages/blog.tsx';
import ErrorPage from './pages/error-page.tsx';

import '@scss/main.scss';
import { PlayersPage } from './pages/players.tsx';
import { HomePage } from './pages/home.tsx';
import { TeamsPage } from './pages/teams.tsx';
import { PostPage } from './pages/post-page.tsx';
import { PlayerDetailsPage } from './pages/player-details.tsx';
import { ContactPage } from './pages/contact.tsx';
import { PartnersPage } from './pages/sponsors.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/blog', element: <BlogPage /> },
			{ path: '/:team/players', element: <PlayersPage /> },
			{ path: '/:team/players/:playerId', element: <PlayerDetailsPage /> },
			{ path: '/teams', element: <TeamsPage /> },
			{ path: '/blog', element: <BlogPage /> },
			{ path: 'blog/:postId', element: <PostPage /> },
			{ path: '/contact', element: <ContactPage /> },
			{ path: '/partners', element: <PartnersPage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
