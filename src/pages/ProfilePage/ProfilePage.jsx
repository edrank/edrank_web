import endpoints from 'constants/endpoints';
import { Navbar } from 'components';
import { Link } from 'react-router-dom';
import './ProfilePage.scss';
import { useState, useEffect } from 'react';
import { makeRequest } from 'services';

function ProfilePage() {
	const [user, setUser] = useState({});

	useEffect(() => {
		console.log('useEffect');
		async function fetchData() {
			const response = await makeRequest('my-profile', 'GET');
			console.log(response?.data.data);
			setUser(response?.data.data.profile);
		}
		fetchData();
	}, []);

	return (
		<>
			<Navbar />
			<div className='profile-page-main'>
				<div className='col-1'>
					<img src='#' alt='#' />
				</div>
				<div className='col-2'>
					<div className='thead'>Name</div>
					<div className='tbody'>{user.name ?? 'Loading'}</div>
					<div className='thead'>Email</div>
					<div className='tbody'>{user.email ?? 'Loading'}</div>
					<div className='change-password-btn'>
						<Link to={endpoints.changePasswordPage}>Change Your Password</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfilePage;
