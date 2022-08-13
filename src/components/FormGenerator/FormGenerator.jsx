import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

function FormGenerator({ formClass, onSubmit, formObject }) {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const selectOptions = [
		{ value: 'STUDENT', label: 'Student' },
		{ value: 'TEACHER', label: 'Teacher' },
		{ value: 'PARENT', label: 'Parent' },
		{ value: 'COLLEGE_ADMIN', label: 'College Admin' },
		{ value: 'HEI', label: 'HEI Authority/Regulators' },
		{ value: 'SUPER_ADMIN', label: 'Super Admin' },
	];

	// const inputTypes = Object.keys(formFields);
	// const labels = Object.keys(label_required);
	// const input_required = Object.values(label_required);
	// const inputTypes = Object.keys(inputTypes_inputKey);
	// const inputKeys = Object.values(inputTypes_inputKey);

	return (
		<form className={formClass} onSubmit={handleSubmit(onSubmit)}>
			<div className="form-div">
				<h1>Enter your details</h1>
			</div>
			{formObject.map((formField, index) => {
				return formField.inputType === 'select' ? (
					<div className='form-div'>
						<label htmlFor={formField.inputKey}>
							{formField.label}

							{formField.required ? (
								<Controller
									name={formField.inputKey}
									control={control}
									rules={{ required: 'This field is required' }}
									render={({ field }) => (
										<Select
											name='tenantType'
											inputId='tenantType'
											options={selectOptions}
											{...field}
										/>
									)}
								/>
							) : (
								<Controller
									name={formField.inputKey}
									control={control}
									render={({ field }) => (
										<Select
											name='tenantType'
											inputId='tenantType'
											options={selectOptions}
											{...field}
										/>
									)}
								/>
							)}
						</label>
						<div className='form-validation-error'>
							{errors[formField.inputKey]?.message}
						</div>
					</div>
				) : (
					<div className='form-div'>
						<label htmlFor={formField.inputKey}>
							{formField.label}
							{formField.required ? (
								<input
									type={formField.inputType}
									{...register(formField.inputKey, {
										required: 'This is a required field',
									})}
								/>
							) : (
								<input
									type={formField.inputType}
									{...register(formField.inputKey)}
								/>
							)}
						</label>
						<div className='form-validation-error'>
							{errors[formField.inputKey]?.message}
						</div>
					</div>
				);
			})}
			<div className='form-div'>
				<input type='submit' value='PROCEED' />
			</div>
		</form>
	);
}

export default FormGenerator;
