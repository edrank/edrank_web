// import './STPListCard.scss';
function LeaderboardCard({ rank, main, submain }) {
	return (
		<div className='leaderboard-card-main'>
			<p className="leaderboard-rank">{rank}</p>
			<p>{main} <span className="leadercard-submain">({submain})</span></p>
			{/* <p>{submain}</p> */}
		</div>
	);
}

export default LeaderboardCard;
