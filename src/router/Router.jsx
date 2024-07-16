import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Countries from '../pages/Countries';
import Details from '../pages/Details';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Countries />} />
				<Route path='/details' element={<Details />} />
			</Route>
		</Routes>
	);
};

export default Router;
