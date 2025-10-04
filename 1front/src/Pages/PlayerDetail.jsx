import { useLocation, useNavigate } from "react-router-dom";
import './Style.css'




function PlayerDetail() {

    const location = useLocation()
    const player = location.state?.p.player

    let photo = player.photo
    let name = player.name
    let team = player.team
    let age  = player.age
    let number = player.number || null



    const navigate = useNavigate()

    if (!player) {
        return (
            <div className="player-detail-page">
                <button className="back-button" onClick={() => navigate('/Players')}>← Back</button>
                <div>Player not found</div>
            </div>
        )
    }

    return(
        <div className="player-detail-page">
            <button className="back-button" onClick={() => navigate('/Players')}>← Back to Players</button>
            
            <div className="player-header">
                <img src={photo} alt={name} className="player-photo" />
                <h1 className="player-name">{name}</h1>
                <h2 className="player-team">{team}</h2>
                <h2 className="player-team">{number}</h2>
                <p className="player-age">Age: {age}</p>

            </div>

            <div className="player-stats">
                <h3 className="stats-title">Player Statistics</h3>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-value">{player.goals || 0}</span>
                        <span className="stat-label">Goals</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{player.assists || 0}</span>
                        <span className="stat-label">Assists</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{player.appearences || 0}</span>
                        <span className="stat-label">Matches</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{player.position || 'N/A'}</span>
                        <span className="stat-label">Position</span>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default PlayerDetail;
