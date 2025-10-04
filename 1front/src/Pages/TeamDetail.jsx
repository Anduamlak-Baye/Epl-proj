
import { useLocation, useNavigate } from 'react-router-dom'
import './Style.css'

function TeamDetail () {
    const location = useLocation()
    const navigate = useNavigate()
    const team = location.state?.team

    if (!team) {
        return (
            <div className="team-detail-page">
                <button className="back-button" onClick={() => navigate('/Teams')}>← Back</button>
                <div>Team not found</div>
            </div>
        )
    }

    return(
        <div className="team-detail-page">
            <button className="back-button" onClick={() => navigate('/Teams')}>← Back to Teams</button>
            
            <div className="team-detail-header">
                <img src={team.logo} alt={team.name} className="team-logo" />
                <h1 className="team-name">{team.name}</h1>
                <p className="team-info">Founded: {team.founded}</p>
                <p className="team-info">Country: {team.country}</p>
            </div>

            <div className="team-details-grid">
                <div className="venue-info">
                    <h3 className="section-title">Stadium Information</h3>
                    <div className="venue-details">
                        <div className="venue-item">
                            <span className="venue-label">Stadium:</span>
                            <span className="venue-value">{team.venue?.name || 'N/A'}</span>
                        </div>
                        <div className="venue-item">
                            <span className="venue-label">Address:</span>
                            <span className="venue-value">{team.venue?.address || 'N/A'}</span>
                        </div>
                        <div className="venue-item">
                            <span className="venue-label">City:</span>
                            <span className="venue-value">{team.venue?.city || 'N/A'}</span>
                        </div>
                        <div className="venue-item">
                            <span className="venue-label">Capacity:</span>
                            <span className="venue-value">{team.venue?.capacity?.toLocaleString() || 'N/A'}</span>
                        </div>
                        <div className="venue-item">
                            <span className="venue-label">Surface:</span>
                            <span className="venue-value">{team.venue?.surface || 'N/A'}</span>
                        </div>
                    </div>
                </div>

                <div className="team-stats">
                    <h3 className="section-title">Team Details</h3>
                    <div className="venue-details">
                        <div className="venue-item">
                            <span className="venue-label">Team Code:</span>
                            <span className="venue-value">{team.code}</span>
                        </div>
                        <div className="venue-item">
                            <span className="venue-label">Founded:</span>
                            <span className="venue-value">{team.founded}</span>
                        </div>
                        <div className="venue-item">
                            <span className="venue-label">National Team:</span>
                            <span className="venue-value">{team.national ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-achievements">
                <h3 className="section-title">Trophy Cabinet</h3>
                <div className="achievements-grid">
                    <div className="achievement-item">
                        <span className="achievement-count">{team.trophies?.premierLeague || 0}</span>
                        <span className="achievement-label">Premier League</span>
                    </div>
                    <div className="achievement-item">
                        <span className="achievement-count">{team.trophies?.faCup || 0}</span>
                        <span className="achievement-label">FA Cup</span>
                    </div>
                    <div className="achievement-item">
                        <span className="achievement-count">{team.trophies?.leagueCup || 0}</span>
                        <span className="achievement-label">League Cup</span>
                    </div>
                    <div className="achievement-item">
                        <span className="achievement-count">{team.trophies?.championsLeague || 0}</span>
                        <span className="achievement-label">Champions League</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamDetail;