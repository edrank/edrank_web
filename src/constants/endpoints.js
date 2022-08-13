// server
const serverUrl = 'http://127.0.0.1:5000';
export const restUrl = `${serverUrl}/api/v1`;

// common
const loginPage = '/login';
const dashboard = '/dashboard';
const forgotPasswordPage = '/forgot-password';
const changePasswordPage = '/change-password';
const notFoundPage = '/not-found';
const profilePage = '/profile';

// college admin
export const collegeAdminPath = '/college-admin';
const addNewCollegeAdmin = '/add-new-college-admin';
const viewStpList = '/view-all';
const entityType = ':entityType';
// const viewTeachers = ':teachers'
// const viewStudents = ':students'
// const viewParents = ':parents'

// super admin
const superAdminPath = '/super-admin';

// student
const studentPath = '/student';
const provideFeedback = '/provide-feedback';

// college admin endpoints
export const collegeAdminEndpoints = addPrefixToPaths(
	{
		base: ['/', dashboard],
		dashboard: dashboard,
		addNewCollegeAdmin: addNewCollegeAdmin,
		viewStpList: viewStpList,
		// viewTeachers: viewTeachers,
		// viewStudents: viewStudents,
		// viewParents: viewParents,
		// profile: '/profile',
	},
	collegeAdminPath,
);

export const studentEndpoints = addPrefixToPaths(
	{
		base: ['/', dashboard],
		dashboard: dashboard,
		provideFeedback: provideFeedback,
	},
	studentPath,
);

export default Object.freeze({
	serverUrl,
	restUrl,
	collegeAdminPath,
	superAdminPath,
	loginPage,
	forgotPasswordPage,
	changePasswordPage,
	notFoundPage,
	profilePage,
	entityType,
	collegeAdmin: collegeAdminEndpoints,
	student: studentEndpoints,
});

/**
 * @param {T} pathsObj
 * @param {string} prefix
 * @returns {T}
 *
 * @template {{[key: string]: string | string[]}} T
 */
function addPrefixToPaths(pathsObj, prefix) {
	const newEntries = Object.entries(pathsObj).map(([k, v]) => {
		if (typeof v === 'string') return [k, prefix + v];
		// handle array type
		return [k, v.map(path => prefix + path)];
	});

	return Object.freeze(Object.fromEntries(newEntries));
}
