import React from "react";
import Match from './Match'
const MatchList = ({matches,onMatchClick}) =>{
    const matchComponent = matches.map(match => {
        return <Match teams={match.teams} details={match.details} matchId={match.matchId} seriesId={match.seriesId} onMatchClick={onMatchClick}/>
    })

    return (
        <div>
            {matchComponent}
        </div>
    )
}

export default MatchList