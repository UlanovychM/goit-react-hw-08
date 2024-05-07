import { Toaster } from 'react-hot-toast';
import AppBar from '../components/AppBar/AppBar';
import { Suspense } from 'react';
import Loader from '../components/Loader/Loader';

const Layout = ({ children }) => {
	return (
		<div>
			<AppBar />
			<Suspense fallback={null}>{children}</Suspense>
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 1500,
				}}
				reverseOrder={false}
			/>
		</div>
	);
};

export default Layout;
