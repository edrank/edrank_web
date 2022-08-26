import React from 'react'
import './TeacherDashboard.scss';
import { makeRequest } from 'services/api';
import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import {TopThreeTeachersLayout} from 'components';
import {RankCard} from 'components';

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
			const response = await makeRequest('top-n-teachers', 'POST', {"request_type": "COLLEGE",
            "cid": 1,
            "city": "",
            "state": "",
            "n": 3});
			setTeachers(response?.data.data.teachers);
			console.log(response?.data.data);
		}
		fetchData();
	}, []);


	return (
		<div className='teacher-dashbaoard'>
            <div className='topThreeTeachers'>
                {
                    [...teachers].map((teacher) => (<TopThreeTeachersLayout name={teacher.name} score={teacher.score} collegeRank={teacher.rank}/> ) )
                }
            </div>

            <div className="teacherAllRanks">
                <p>My all Ranks</p>
                <div className="rankCardsContainer">
                    <RankCard rank={rankNational} ranktype="All India Rank"/>
                    <RankCard rank={rankState} ranktype="State Rank"/>
                    <RankCard rank={rankRegional} ranktype="Regional Rank"/>
                    <RankCard rank={rankCollege} ranktype="College Rank"/>
                </div>
            </div>
			
		</div>
	);
}

export default CollegeAdminDashboard;
