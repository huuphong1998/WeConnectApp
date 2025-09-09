import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@pages/RootLayout';
import ModalProvider from '@context/ModalProvider';
import { lazy } from 'react';
import SearchPage from '@pages/SearchPage';
const MovieDetail = lazy(() => import('@pages/MovieDetail'));
const TVShowDetail = lazy(() => import('@pages/TVShowDetail'));
const HomePage = lazy(() => import('@pages/HomePage'));
const PeoplePage = lazy(() => import('@pages/PeoplePage'));

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <ModalProvider>
        <RouterProvider router={router} />
    </ModalProvider>
);
