import { makeRequest } from 'services/api';
import { useEffect, useState } from 'react';
import './CollegeAdminDashboard.scss';
import { DashboardMetricsCard } from 'components';

function CollegeAdminDashboard() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await makeRequest('dashboard-metrics', 'GET');
			setData(response?.data.data);
			console.log(response?.data.data);
		}
		fetchData();
	}, []);

	return (
		<div className='college-admin-dashboard-main'>
			<div className='college-admin-dashboard-metrics-wrapper'>
				<DashboardMetricsCard digit={data.college_feedbacks} text='Feedbacks' />
				<DashboardMetricsCard digit={data.drives} text='Drives run' />
				<DashboardMetricsCard digit={data.students} text='Students' />
				<DashboardMetricsCard digit={data.teachers} text='Teachers' />
			</div>
		</div>
	);
}

export default CollegeAdminDashboard;
