import './AddNewCollegeAdmin.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { restUrl } from 'constants/endpoints';

function AddNewCollegeAdmin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data);
		try {
			axios
				.post(restUrl + '/create-college-admin', data, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					},
				})
				.then(response => {
					console.log(response);
				});
		} catch (error) {}
	};
	return (
		<div className='add-new-college-admin-main form-page-main-wrapper'>
			<form
				className='add-new-college-admin-form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='form-div'>
					<h1>Add New College Admin</h1>
				</div>
				<div className='form-div'>
					<label htmlFor='collegeAdminName'>
						&nbsp;&nbsp;Name of the new college admin
						<input
							type='text'
							placeholder='Placeholder'
							{...register('name', { required: 'This is a required field!' })}
						/>
					</label>
					<div className='form-validation-error'>{errors.name?.message}</div>
				</div>
				<div className='form-div'>
					<label htmlFor='collegeAdminEmail'>
						&nbsp;&nbsp;Email address of the new college admin
						<input
							type='email'
							placeholder='Placeholder'
							{...register('email', { required: 'This is a required field!' })}
						/>
					</label>
					<div className='form-validation-error'>{errors.email?.message}</div>
				</div>
				<div className='form-div'>
					<input type='submit' value='Proceed' />
				</div>
			</form>
		</div>
	);
}

export default AddNewCollegeAdmin;
