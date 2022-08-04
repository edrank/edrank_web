const collegeAdminLink = '/college-admin';

export const SideBarPathIndex = {
	collegeAdmin: {
		'/college-admin/dashboard': 0,
		'/college-admin/add-new-college-admin': 1,
		'/college-admin/teachers': 2,
		'/college-admin/students': 3,
		'/college-admin/parents': 4,
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
			icon: 'fa fa-fw fa-home',
			cName: 'sidebar_option',
		},
		{
			option_name: 'Add New College Admin',
			path: collegeAdminLink + '/add-new-college-admin',
			icon: 'fas fa-users',
			cName: 'sidebar_option',
		},
		{
			option_name: 'Teachers',
			path: collegeAdminLink + '/teachers',
			icon: 'fas fa-trophy',
			cName: 'sidebar_option',
		},
		{
			option_name: 'Students',
			path: collegeAdminLink + '/students',
			icon: 'fas fa-chart-line',
			cName: 'sidebar_option',
		},
		{
			option_name: 'Parents',
			path: collegeAdminLink + '/parents',
			icon: 'fas fa-key',
			cName: 'sidebar_option',
		},
		{
			option_name: 'View College Admins',
			path: collegeAdminLink + '/view-college-admins',
			icon: 'fas fa-bug',
			cName: 'sidebar_option',
		},
		// {
		// 	option_name: 'About App',
		// 	path: '/about',
		// 	icon: 'fab fa-medapps',
		// 	cName: 'sidebar_option about_app',
		// },
	],
};
