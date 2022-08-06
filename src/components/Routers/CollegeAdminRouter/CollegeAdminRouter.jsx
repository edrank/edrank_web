import './CollegeAdminRouter.scss';
import { Navbar, Sidebar } from 'components';
import { Outlet } from 'react-router-dom';
// import { collegeAdminEndpoints } from 'constants/endpoints';

function CollegeAdminRouter() {
	// console.log('COLLEGE ADMIN BASE');
	// console.log(collegeAdminEndpoints.base);
	return (
		<>
			<Navbar />
			<div className='college-admin-router-main page-view-wrapper'>
				<Sidebar />
				{/* <Route
					path='/college-admin/dashboard'
					element={<Dashboard />}
				/> */}
				<div className="college-admin-route-child">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default CollegeAdminRouter;
