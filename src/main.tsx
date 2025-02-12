import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './18n.js';
import App from './App.tsx';
import { BlogPage } from './pages/blog.tsx';
import { TeamsPage } from './pages/teams.tsx';
import ErrorPage from './pages/error-page.tsx';

import '@scss/main.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/blog',
		element: <BlogPage />,
	},
	{
		path: '/teams',
		element: <TeamsPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
