import { makeRequest } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STPListCard } from 'components';

function CollegeDetailsPage() {
	const { collegeId } = useParams();
	const [college, setCollege] = useState({});
	const [nationalRank, setNationalRank] = useState(0);
	const [stateRank, setStateRank] = useState(0);
	const [regionalRank, setRegionalRank] = useState(0);

	useEffect(() => {
		async function fetchData() {
			const response = await makeRequest('get-college', 'POST', {
				college_id: parseInt(collegeId),
			});
			const reponse1 = await makeRequest('get-my-colleges-rank', 'POST', {
				cid: parseInt(collegeId),
				request_type: 'NATIONAL',
			});
			const reponse2 = await makeRequest('get-my-colleges-rank', 'POST', {
				cid: parseInt(collegeId),
				request_type: 'STATE',
				state: response?.data.data.college.state,
			});
			const response3 = await makeRequest('get-my-colleges-rank', 'POST', {
				cid: parseInt(collegeId),
				request_type: 'REGIONAL',
				state: response?.data.data.college.city,
			});
			// const data = await response.json();
			console.log('data');
			console.log(response?.data.data.college);
			setCollege(response?.data.data.college);
			setNationalRank(reponse1?.data.data.rank);
			setStateRank(reponse2?.data.data.rank);
			setRegionalRank(response3?.data.data.rank);
		}
		fetchData();
	}, []);

	return (
		<div className='college-details-page-main'>
			<STPListCard item={college} entityType='college' />
			<div className='college-rank-wrapper'>
				<p className='national-rank'>National Rank: {nationalRank}</p>
				<p className='state-rank'>State Rank: {stateRank}</p>
			</div>
		</div>
	);
}

export default CollegeDetailsPage;
