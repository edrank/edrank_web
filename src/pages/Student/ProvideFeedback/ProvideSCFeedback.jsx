import endpoints from 'constants/endpoints';
import { Navbar } from 'components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { makeRequest } from 'services';
import { FormGenerator, QuestionCard } from 'components';

function StudentProvideSCFeedback() {
	const [feedbackQUestions, setFeedbackQuestions] = useState([]);
	const [driveid, setDriveId] = useState("1");

	useEffect(() => {
		console.log('useEffect');
		async function fetchData() {
			const response = await makeRequest('feedback-questions/SC', 'GET');
			setFeedbackQuestions(response?.data.data.questions);
		}
		fetchData();
	}, []);

	const onSubmit = () => {

	}

	const addFeedback = () => {

	}

	return (
		<>
			<Navbar />
			<div className='st-feedback-form-main'>
				<div>
					{
						feedbackQUestions.map((fbq, i) => {
							return (
								<QuestionCard
									key={i}
									question={fbq.title}
									options={[fbq.option_1, fbq.option_2, fbq.option_3, fbq.option_4, fbq.option_5]}
								/>
							)
						})
					}
				</div>
				<button onClick={onSubmit}>Submit Feedback</button>
			</div>
		</>
	);
}

export default StudentProvideSCFeedback;