// import './STPListCard.scss';
function LeaderboardCard({ main, submain }) {
	return (
		<div className='question-list-card-main'>
			<h4>{main}</h4>
            <br></br>
            <h6>{submain}</h6>
            <br></br>
            <br></br>
		</div>
	);
}

export default LeaderboardCard;
