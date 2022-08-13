// admin icons
import iconDashboard from 'assets/images/icon-dashboard-1.png';
import iconAddNew from 'assets/images/icon-add-new.png';
import iconTeacher from 'assets/images/icon-teacher-1.png';
import iconStudent from 'assets/images/icon-student.png';
import iconParent from 'assets/images/icon-parents.png';
import iconCollegeAdmin from 'assets/images/icon-college-admin.png';

const collegeAdminLink = '/college-admin';

export const SideBarPathIndex = {
	collegeAdmin: {
		'/college-admin/dashboard': 0,
		'/college-admin/add-new-college-admin': 1,
		'/college-admin//view-all/teachers': 2,
		'/college-admin/view-all/students': 3,
		'/college-admin/view-all/parents': 4,
		'/college-admin/college-admins': 5,
		// '/college-admin/about': 6,
	},
	superAdmin: {
		'/super-admin/dashboard': 0,
	},
};

export const SidebarData = {
	collegeAdmin: [
		{
			option_name: 'Dashboard',
			path: collegeAdminLink + '/dashboard',
			icon: iconDashboard,
			cName: 'sidebar_option',
		},
		{
			option_name: 'Add New College Admin',
			path: collegeAdminLink + '/add-new-college-admin',
			icon: iconAddNew,
			cName: 'sidebar_option',
		},
		{
			option_name: 'Teachers',
			path: collegeAdminLink + '/view-all/teachers',
			icon: iconTeacher,
			cName: 'sidebar_option',
		},
		{
			option_name: 'Students',
			path: collegeAdminLink + '/view-all/students',
			icon: iconStudent,
			cName: 'sidebar_option',
		},
		{
			option_name: 'Parents',
			path: collegeAdminLink + '/view-all/parents',
			icon: iconParent,
			cName: 'sidebar_option',
		},
		{
			option_name: 'View College Admins',
			path: collegeAdminLink + '/view-college-admins',
			icon: iconCollegeAdmin,
			cName: 'sidebar_option',
		},
	],
};
