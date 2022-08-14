import endpoints from 'constants/endpoints';
import { Navbar } from 'components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { makeRequest } from 'services';
import { LeaderboardCard } from 'components';

function CollegeLeaderBoards() {
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        console.log('useEffect');
        async function fetchData() {
            const response = await makeRequest('top-n-colleges', 'POST', {
                request_type: "NATIONAL",
                n: -1
            });
            setLeaderboard(response?.data.data.colleges);
        }
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className='teacher-leaderboard-main'>
                {
                    leaderboard.map((lb, i) => {
                        return (
                            <LeaderboardCard
                            key={i}
                            main={lb.name}
                            submain={`${lb.city}, ${lb.state}`}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default CollegeLeaderBoards;