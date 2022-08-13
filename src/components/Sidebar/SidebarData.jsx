import { collegeAdminEndpoints, collegeAdminPath, studentEndpoints } from 'constants/endpoints';

// common icons
import iconDashboard from 'assets/images/icon-dashboard-1.png';
// admin icons
import iconAddNew from 'assets/images/icon-add-new.png';
import iconTeacher from 'assets/images/icon-teacher-1.png';
import iconStudent from 'assets/images/icon-student.png';
import iconParent from 'assets/images/icon-parents.png';
import iconCollegeAdmin from 'assets/images/icon-college-admin.png';

// student icons
import iconFeedback from 'assets/images/icon-feedback.png';

export const SideBarPathIndex = {
	COLLEGE_ADMIN: {
		[collegeAdminEndpoints.dashboard]: 0,
		[collegeAdminEndpoints.addNewCollegeAdmin]: 1,
		[collegeAdminPath + '/teachers']: 2,
		[collegeAdminPath + '/students']: 3,
		[collegeAdminPath + '/parents']: 4,
		[collegeAdminEndpoints.collegeAdmins]: 5,
		// '/college-admin/about': 6,
	},
	SUPER_ADMIN: {
		'/super-admin/dashboard': 0,
	},
	STUDENT: {
		[studentEndpoints.base]: 0,
		[studentEndpoints.dashboard]: 0,
		[studentEndpoints.provideFeedback]: 1,
	},
};

export const SidebarData = {
	COLLEGE_ADMIN: [
		{
			option_name: 'Dashboard',
			path: collegeAdminPath + '/dashboard',
			icon: iconDashboard,
		},
		{
			option_name: 'Add New College Admin',
			path: collegeAdminPath + '/add-new-college-admin',
			icon: iconAddNew,
		},
		{
			option_name: 'Teachers',
			path: collegeAdminPath + '/view-all/teachers',
			icon: iconTeacher,
		},
		{
			option_name: 'Students',
			path: collegeAdminPath + '/view-all/students',
			icon: iconStudent,
		},
		{
			option_name: 'Parents',
			path: collegeAdminPath + '/view-all/parents',
			icon: iconParent,
		},
		{
			option_name: 'View College Admins',
			path: collegeAdminPath + '/view-college-admins',
			icon: iconCollegeAdmin,
		},
	],
	STUDENT: [
		{
			option_name: 'Dashboard',
			path: studentEndpoints.dashboard,
			icon: iconDashboard,
		},
		{
			option_name: 'Provide Feedback',
			path: studentEndpoints.provideFeedback,
			icon: iconFeedback,
		},
	],
};
