import {
	LoginPage,
	// Dashboard,
	ProfilePage,
	AddNewCollegeAdmin,
	ChangePassword,
	STPListPage,
	FeedbackFormPage,
	// ProvideSTFeedback,
	ProvideSCFeedback,
	TeacherLeaderboard,
	CollegeLeaderboard,
	STPDetailsPage,
	SuperAdminDashboard,
	CollegeDetailsPage,
} from 'pages';
import endpoints, {
	collegeAdminEndpoints,
	studentEndpoints,
	superAdminEndpoints,
} from 'constants/endpoints';
import {
	CollegeAdminRouter,
	StudentDashboard,
	CollegeAdminDashboard,
} from 'components';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
	console.log('COLLEGE ADMIN BASE');
	console.log(collegeAdminEndpoints.dashboard);
	console.log('ENTITY TYPE');
	console.log(collegeAdminEndpoints.viewStpList);
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
						<Route index element={<CollegeAdminDashboard />} />
						<Route
							path={collegeAdminEndpoints.dashboard}
							element={<CollegeAdminDashboard />}
						/>
						<Route
							path={collegeAdminEndpoints.addNewCollegeAdmin}
							element={<AddNewCollegeAdmin />}
						/>
						<Route path={collegeAdminEndpoints.viewStpList}>
							<Route path={endpoints.entityType} element={<STPListPage />} />
						</Route>
						<Route path={collegeAdminEndpoints.viewDetails}>
							<Route path={endpoints.entityId} element={<STPDetailsPage />} />
						</Route>
					</Route>
					<Route path='/student' element={<CollegeAdminRouter />}>
						<Route index element={<StudentDashboard />} />
						<Route
							path={studentEndpoints.dashboard}
							element={<StudentDashboard />}
						/>
						<Route
							path={studentEndpoints.provideFeedbackSC}
							element={<ProvideSCFeedback />}
						/>
						<Route
							path={studentEndpoints.provideFeedbackST}
							element={<FeedbackFormPage />}
						/>
						<Route
							path={studentEndpoints.teacherLeaderboard}
							element={<TeacherLeaderboard />}
						/>
						<Route
							path={studentEndpoints.collegeLeaderboard}
							element={<CollegeLeaderboard />}
						/>
					</Route>
					<Route path='/regulator' element={<CollegeAdminRouter />}>
						<Route index element={<SuperAdminDashboard />} />
						<Route
							path={superAdminEndpoints.dashboard}
							element={<SuperAdminDashboard />}
						/>
						<Route
							path={superAdminEndpoints.teacherLeaderboard}
							element={<TeacherLeaderboard />}
						/>
						<Route
							path={superAdminEndpoints.collegeLeaderboard}
							element={<CollegeLeaderboard />}
						/>
						<Route
							path=':collegeId'
							element={<CollegeDetailsPage />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
