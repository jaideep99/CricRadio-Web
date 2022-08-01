import React from "react";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import MatchList from './MatchList'
import Match from './Match'
//teams="IND vs WI" matchId="ind-wi" seriesId="ind-tour-wi" details="2nd ODI"
const Sidebar = ({matches,matchSelect}) => {
    return (
        <aside className="sidebar">
            <header className="header">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    color: 'white',
                }}>
                    <span style={{
                        marginRight: '6px',
                        marginTop:'2px',
                    }}>Live Matches</span>
                    <PodcastsIcon style={{
                        color:'#43abcd',
                    }}/>
                </div>
            </header>

            <div className="match-list">
                <MatchList matches={matches} onMatchClick={matchSelect}/>
            </div>
        </aside>
    )

}

export default Sidebar;