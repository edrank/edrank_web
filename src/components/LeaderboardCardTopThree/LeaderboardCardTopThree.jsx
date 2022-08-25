function LeaderboardCardTopThree({
	rank,
	name,
	college_name,
	submain,
	isCollegeLeaderboard,
}) {
	return (
		<div className='top-3-card-main-wrapper'>
			<div className='top-3-card-main'>
				<div className='circle'>
					<div className='inner-circle'>
						<p className='leaderboard-rank'>{rank}</p>
					</div>
				</div>
				<div className='top-3-card-main-text'>
					<p className='leaderboard-name'>{name}</p>
					{!isCollegeLeaderboard && (
						<>
							<span>from</span>
							<p>({college_name})</p>
						</>
					)}
					{
						isCollegeLeaderboard && (
							<p>
								({submain})
							</p>
						)
					}
				</div>
			</div>
		</div>
	);
}

export default LeaderboardCardTopThree;
