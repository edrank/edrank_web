// server
const serverUrl = 'http://127.0.0.1:5000';
export const restUrl = `${serverUrl}/api/v1`;

// common
const loginPage = '/login';
const dashboard = '/dashboard';
const forgotPasswordPage = '/forgot-password';
const notFoundPage = '/not-found';
const profilePage = '/profile';

// college admin
export const collegeAdminPath = '/college-admin'
const addNewCollegeAdmin = '/add-new-college-admin'
// super admin
const superAdminPath = '/super-admin';

// college admin endpoints
export const collegeAdminEndpoints = addPrefixToPaths(
	{
		base: ['/', dashboard],
		dashboard: dashboard,
		addNewCollegeAdmin: addNewCollegeAdmin,
		// profile: '/profile',
	},
	collegeAdminPath,
)


export default Object.freeze({
	serverUrl,
	restUrl,
	collegeAdminPath,
	superAdminPath,
	loginPage,
	forgotPasswordPage,
	notFoundPage,
	profilePage,
	collegeAdmin: collegeAdminEndpoints,
})



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
