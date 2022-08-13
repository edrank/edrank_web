import './STPListCard.scss';
function STPListCard({ item, entityType }) {
	return (
		<div className='stp-list-card-main'>
			{/* {entityType === 'teachers' && <span>{item.score ?? '00'} / 100</span>} */}
			<p>Name: {item.name ?? 'Loading'}</p>
			<p>Email: {item.email ?? 'Loading'}</p>
			{entityType === 'students' && (
				<>
					<p>Enrollment No.: {item.enrollment ?? 'Loading'}</p>
					<p>Batch: {item.batch ?? 'Loading'}</p>
					<p>Father's Name: {item.fathers_name ?? 'Loading'} </p>
					<p>Mohter's Name: {item.mother_name ?? 'Loading'} </p>
				</>
			)}
			{entityType === 'teachers' && (
				<>
					<p>Department: {item.department ?? 'Loading'}</p>
					<p>Designation: {item.designation ?? 'Loading'}</p>
				</>
			)}
			{entityType === 'parents' && (
				<>
					<p>Phone: {item.phone ?? 'Loading'}</p>
					<p>Status: {(item.is_active ? 'Active' : 'Inactive') ?? 'Loading'}</p>
				</>
			)}
		</div>
	);
}

export default STPListCard;
