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
const viewDetails = '/view-details'
const entityId = ':entityType/:entityId';
// const viewTeachers = ':teachers'
// const viewStudents = ':students'
// const viewParents = ':parents'
const collegeAdmins = '/view-all-college-admins'

// super admin
const superAdminPath = '/regulator';
const collegeId = '/college/:collegeId'

// student
const studentPath = '/student';
const provideFeedbackST = '/provide-feedback/teacher';
const provideFeedbackSC = '/provide-feedback/college';
const provideFeedback1 = '/provide-feedback1';
const teacherLeaderboard = '/teacher-leaderboard';
const collegeLeaderboard = '/college-leaderboard';

// teacher
const teacherPath = '/teacher';
// const dashboard1 = '/dashboard'


// // SUPER_ADMIN
// const superAdminPath='/regulator'


// college admin endpoints
export const collegeAdminEndpoints = addPrefixToPaths(
	{
		base: ['/', dashboard],
		dashboard: dashboard,
		addNewCollegeAdmin: addNewCollegeAdmin,
		viewStpList: viewStpList,
		viewDetails: viewDetails,
		collegeAdmins: collegeAdmins,
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
		provideFeedbackST: provideFeedbackST,
		provideFeedbackSC: provideFeedbackSC,
		provideFeedback1: provideFeedback1,
		teacherLeaderboard: teacherLeaderboard,
		collegeLeaderboard: collegeLeaderboard,
	},
	studentPath,
);

export const superAdminEndpoints = addPrefixToPaths(
	{
		base: ['/', dashboard],
		dashboard: dashboard,
		teacherLeaderboard: teacherLeaderboard,
		collegeLeaderboard: collegeLeaderboard,
	},
	superAdminPath,
)

export const teacherEndpoints = addPrefixToPaths(
	{
		base: ['/', dashboard],
		dashboard: dashboard,
	},
	teacherPath
)


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
	entityId,
	collegeId,
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
