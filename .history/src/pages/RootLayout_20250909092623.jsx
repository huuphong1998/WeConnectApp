import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Suspense } from 'react';
import Loading from '@components/Loading';

const RootLayout = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading</p>}>
                <Outlet />
            </Suspense>
        </div>
    );
};
export default RootLayout;
