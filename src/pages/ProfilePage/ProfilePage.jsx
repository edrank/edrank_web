import { restUrl } from 'constants/endpoints';
import { Navbar } from 'components';
import { Link } from 'react-router-dom';
import './ProfilePage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePage() {
	const [user, setUser] = useState({});

	// fetch(restUrl + '/my-profile', {
	// 	headers: {
	// 		Authorization: 'Bearer ' + localStorage.getItem('token'),
	// 	},
	// }).then(response => {
	// 	console.log(response);
	// });

	useEffect(() => {
		try {
			axios
				.get(restUrl + '/my-profile', {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					},
				})
				.then(response => {
					console.log(response);
					setUser(response.data.data.profile);
				})
				.catch(error => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
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
						<Link to='/change-password'>Change Your Password</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfilePage;
