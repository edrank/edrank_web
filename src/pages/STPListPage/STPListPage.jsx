import { restUrl } from 'constants/endpoints';
import axios from 'axios';
import { STPListCard } from 'components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './STPListPage.scss';
import { makeRequest } from 'services';

function STPListPage() {
	var { entityType } = useParams();
	console.log('params: ' + entityType);
	// const viewEntity = params;

	const [data, setData] = useState([]);

	useEffect(() => {
		setData([]);
		async function fetchData() {
			const response = await makeRequest(
				'my-college-entity/' + entityType,
				'GET',
			);
			console.log(response?.data.data[entityType]);
			setData(response?.data.data[entityType]);
		}
		fetchData();
	}, [entityType]);

	return (
		<>
			<div className='stp-list-page-main'>
				<h3>
					All <span>{entityType}</span> of your College
				</h3>
				{data.length === 0 && <div>Loading</div>}
				{data?.map((item, index) => {
					return (
						<STPListCard key={index} item={item} entityType={entityType} />
					);
				})}
			</div>
		</>
	);
}

export default STPListPage;
