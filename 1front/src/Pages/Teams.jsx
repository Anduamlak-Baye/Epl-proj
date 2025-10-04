import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'


function Teams() {
    const [searchInput, setSearchInput] = useState("")
    const [teamm,setTeam] = useState([])
    const [allTeams, setAllTeams] = useState([])
    const navigate = useNavigate()

    const URL = 'http://localhost:3000/teams'

    
    useEffect(() => {
    axios.get(URL + '/allteams')
        .then((response) => {
            setAllTeams(...allTeams, response.data)

    })

    },[])
    console.log(allTeams.length)

    allTeams.forEach((t) => {
        console.log(t)
    })    


    const TeamSearcher = (team) => {
    axios.get(URL + `/${team}`)
    .then((resopnse) => {
        // console.log(resopnse.data)
        resopnse.data ? setTeam(...teamm, resopnse.data) : null
        
    })

    }
    return (
        <div className="teams-page">
            <div className="search-container">
                <input 
                    onChange={(event) => {setSearchInput(event.target.value)}} 
                    placeholder="Search for your team here"
                />
            </div>

            <div className="teams-grid">
                {searchInput == '' ? allTeams.map((team) => (
                    <div  onClick={() => {navigate('/TeamDetail', {state : { team } })}} key={team.id} className="team-cont">
                        <img src={team.logo} alt={team.name} />
                        <h2>{team.name}</h2>
                        <h2>Founded: {team.founded}</h2>
                    </div>
                )) : allTeams
                    .filter((team) => team.name.toLowerCase().includes(searchInput.toLowerCase()))
                    .map((team) => (
                        <div onClick={() => {navigate('/TeamDetail', {state : { team } })}} key={team.id} className="team-cont">
                            <img src={team.logo} alt={team.name} />
                            <h2>{team.name}</h2>
                            <h2>Founded: {team.founded}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Teams;