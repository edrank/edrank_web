import { makeRequest } from 'services/api';
import { FormGenerator } from 'components';
import { useEffect, useState } from 'react';

function FeedbackFormPage() {
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		async function fetchData() {
			console.log('FeedbackFormPage');
			const response = await makeRequest('feedback-questions/ST', 'GET');
			console.log('response');
			console.log(response?.data.data.questions);
			setQuestions(response?.data.data.questions);
		}
		fetchData();
	}, []);

	// const getRadioOptions = question => {
	// 	// return [
	// 	// 	question.option_1,
	// 	// 	question.option_2,
	// 	// 	question.option_3,
	// 	// 	question.option_4,
	// 	// 	question.option_5,
	// 	// ];
	// 	let optionsArray = [];
	// 	let index = 1;
	// 	for (index = 1; index <= 5; index++) {
	// 		optionsArray.push(question?.['option_' + index]);
	// 	}
	// 	return optionsArray;
	// };

	const formObject = [
		{
			inputType: 'radio',
			inputKey: questions[1]?.id,
			label: questions[1]?.title,
			required: true,
			options: ['option-1', 'option-2', 'option-3', 'option-4', 'option-5', 'option-6'],
			// options: [
			// 	{ option_1: 'option-1' },
			// 	{ option_2: 'option-2' },
			// 	{ option_3: 'option-3' },
			// 	{ option_4: 'option-4' },
			// 	{ option_5: 'option-5' },
			// ],
		},
	];

	const onSubmit = data => {
		console.log('data');
		console.log(data);
	};

	return (
		<div className='feedback-form-page-main'>
			<h1 className='feedback-form-page-header'>
				Please provide your valuable feedback
			</h1>
			<div className='feedback-form-page-body'>
				<FormGenerator
					formClass='feedback-form-wrapper'
					onSubmit={onSubmit}
					formObject={formObject}
				/>
			</div>
		</div>
	);
}

export default FeedbackFormPage;
