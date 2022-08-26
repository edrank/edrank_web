import React from 'react';
import './TeacherDashboard.scss';
import { makeRequest } from 'services/api';
import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import {
	LeaderboardCard,
	LeaderboardCardTopThree,
	TopThreeTeachersLayout,
} from 'components';
import { RankCard } from 'components';

function CollegeAdminDashboard() {
	const [teachers, setTeachers] = useState([]);
	const [ranks, setRanks] = useState([]);
	const [rankNational, setRankNational] = useState(0);
	const [rankRegional, setRankRegional] = useState(0);
	const [rankState, setRankState] = useState(0);
	const [rankCollege, setRankCollege] = useState(0);

	useEffect(() => {
		async function fetchData() {
			const response = await makeRequest('get-my-rank/NATIONAL', 'GET');
			setRankNational(response?.data.data.rank);
			console.log(response?.data.data);
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			const response = await makeRequest('get-my-rank/REGIONAL', 'GET');
			setRankRegional(response?.data.data.rank);
			console.log(response?.data.data);
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			const response = await makeRequest('get-my-rank/STATE', 'GET');
			setRankState(response?.data.data.rank);
			console.log(response?.data.data);
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			const response = await makeRequest('get-my-rank/COLLEGE', 'GET');
			setRankCollege(response?.data.data.rank);
			console.log(response?.data.data);
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			const response = await makeRequest('top-n-teachers', 'POST', {
				request_type: 'COLLEGE',
				cid: 1,
				city: '',
				state: '',
				n: 3,
			});
			setTeachers(response?.data.data.teachers);
			console.log(response?.data.data);
		}
		fetchData();
	}, []);

	return (
		<div className='teacher-dashbaoard'>
			{/* <div className='topThreeTeachers'>
				{[...teachers].map(teacher => (
					<TopThreeTeachersLayout
						name={teacher.name}
						score={teacher.score}
						collegeRank={teacher.rank}
					/>
				))}
			</div> */}

			<div className='teacherAllRanks'>
				<h2>My all Ranks</h2>
				<div className='college-admin-dashboard-metrics-wrapper'>
					<LeaderboardCardTopThree
						isCollegeLeaderboard={true}
						rank={rankState}
						name='State Rank'
					/>
					<LeaderboardCardTopThree
						isCollegeLeaderboard={true}
						rank={rankRegional}
						name='Regional Rank'
					/>
					<LeaderboardCardTopThree
						isCollegeLeaderboard={true}
						rank={rankCollege}
						name='College Rank'
					/>
					<LeaderboardCardTopThree
						isCollegeLeaderboard={true}
						rank={rankNational}
						name='All India Rank'
					/>
				</div>
			</div>
			<div className='topTeachers'>
				<h2>Top teachers of your college</h2>
				{teachers.map((teacher, index) => (
					<LeaderboardCard key={index} rank={teacher.rank} main={teacher.name} />
				))}
			</div>
		</div>
	);
}

export default CollegeAdminDashboard;
