import {
	LoginPage,
	Dashboard,
	ProfilePage,
	AddNewCollegeAdmin,
	ChangePassword,
} from 'pages';
import endpoints, { collegeAdminEndpoints } from 'constants/endpoints';
import { CollegeAdminRouter } from 'components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	console.log('COLLEGE ADMIN BASE');
	console.log(collegeAdminEndpoints.dashboard);
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<LoginPage />} />
					<Route exact path={endpoints.profilePage} element={<ProfilePage />} />
					<Route
						path={endpoints.changePasswordPage}
						element={<ChangePassword />}
					/>
					<Route path='/college-admin' element={<CollegeAdminRouter />}>
						<Route index element={<Dashboard />} />
						<Route
							path={collegeAdminEndpoints.dashboard}
							element={<Dashboard />}
						/>
						<Route
							path={collegeAdminEndpoints.addNewCollegeAdmin}
							element={<AddNewCollegeAdmin />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
