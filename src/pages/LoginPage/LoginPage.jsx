import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { restUrl } from 'constants/endpoints';
// import { useState } from 'react';
import './LoginPage.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tenantTypeKeyPairMap } from 'constants/tenantTypeKeyPairMap';

export default function LoginPage() {
	// const [tenantType, setTenantType] = useState(null);
	let navigate = useNavigate();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log('data');
		console.log(data);
		const { email, password, tenantType } = data;
		const requestBody = {
			email: email,
			password: password,
		};

		console.log(tenantTypeKeyPairMap["COLLEGE_ADMIN"]);


		try {
			axios
				.post(restUrl + '/login', requestBody, {
					headers: {
						// 'Content-Type': 'application/json',
						'x-edrank-tenant-type': tenantType.value,
					},
				})
				.then(response => {
					console.log(response);
					localStorage.setItem('token', response.data.data.access_token);
					navigate(`/${tenantTypeKeyPairMap[response.data.data.tenant_type]}`);
					console.log('REDIRECTING TO DASHBOARD');
					console.log(response.data.data.tenant_type)
					console.log(tenantTypeKeyPairMap[response.data.data.tenant_type]);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const loginOptions = [
		{ value: 'STUDENT', label: 'Student' },
		{ value: 'TEACHER', label: 'Teacher' },
		{ value: 'PARENT', label: 'Parent' },
		{ value: 'COLLEGE_ADMIN', label: 'College Admin' },
		{ value: 'HEI', label: 'HEI Authority/Regulators' },
		{ value: 'SUPER_ADMIN', label: 'Super Admin' },
	];
	return (
		<div className='login-page-main form-page-main-wrapper'>
			<form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>
				<div className='form-div'>
					<h1>Enter you details</h1>
				</div>
				<div className='form-div'>
					<label htmlFor='email'>
						Email
						<input
							type='email'
							name='email'
							id='email'
							{...register('email', {
								required: 'This is a required field',
							})}
						/>
					</label>
					<div className='form-validation-error'>{errors.email?.message}</div>
				</div>
				<div className='form-div'>
					<label htmlFor='password'>
						Password
						<input
							type='password'
							name='password'
							id='password'
							{...register('password', {
								required: 'This is a required field',
							})}
						/>
						<div className='form-validation-error'>
							{errors.password?.message}
						</div>
					</label>
				</div>
				<div className='form-div'>
					<label htmlFor='loginAs'>
						Login as:
						{/* <Select options={loginOptions} /> */}
						<Controller
							name='tenantType'
							control={control}
							rules={{ required: 'This field is required' }}
							render={({ field }) => (
								<Select
									name='tenantType'
									inputId='tenantType'
									options={loginOptions}
									// getOptionValue={option => option.value}
									{...field}
								/>
							)}
						/>
						<div className='form-validation-error'>
							{errors.tenantType?.message}
						</div>
					</label>
				</div>
				<div className='form-div'>
					<input type='submit' value='Proceed' />
				</div>
			</form>
		</div>
	);
}
