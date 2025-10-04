import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Players() {

    const URL = 'http://localhost:3000/players'
    // const config = {headers}
    const [userInput ,setInput] = useState("")
    const [allPlayers, setAllPlayers] = useState([])
    const navigate = useNavigate()

    const searcher = (player) =>{
        axios.get(URL + `/${player}`)
        .then((response) => {
            // Ensure response.data is always treated as array
            const players = Array.isArray(response.data) ? response.data : [response.data]
            setAllPlayers(players)
        })
    }
    
    return(
        <div className="players-page">
            <div className="players-search-container">
                <input 
                    onChange={(event) => {setInput(event.target.value)}}
                    placeholder="Search for players..."
                />
                <button className='Search-btn'   onClick={() => searcher(userInput) }>Search for a player</button>
            </div>
            {userInput.length > 0 ? (

                <div className="players-grid">
                    {Array.isArray(allPlayers) && allPlayers.length > 0 ? allPlayers.map((p, index) => (
                        <div onClick={() => {navigate('/PlayerDetail', {state : { p } })}} key={index} className='player-card'>
                            <img src={p.player?.photo || p.photo} alt={p.player?.name || p.name} />
                            <h2>{p.player?.name || p.name}</h2>
                            <h2>{p.player?.team || p.team}</h2>
                        </div>
                    )) : null}
                </div>
            ) : (
                <div className="search-prompt">
                    Start searching for your favorite players...
                </div>
            )}
        </div>
    )
}


export default Players;