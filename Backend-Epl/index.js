


import express from 'express'
import path from 'path'
import ejs from 'ejs'
import axios from 'axios'
import {teams , players} from './server.js'


const app = express()

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
const port = 3000
const URL = "https://v3.football.api-sports.io"
const Auth = {
    headers: {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "997d52389148347eac8eba1990b45369"
	}
}

app.get('/players/:player', async (req,res) => {
    console.log('Welcome')
    console.log(req.params.player)
    const query = `/players?league=39&search=${req.params.player}`
    console.log(URL + query)

    try{
    const response = await axios.get(URL + query,Auth)
    console.log(response.data.response)
    res.json(response.data.response)
    }catch(error){
        res.json(error)
    }

    // res.json(players)
    
})


app.get('/teams/search/:name' ,(req,res) => {
    const teamCode = req.params.name
    const filterdTeam = teams.find((team) => (
        teamCode == team.name

    ))
    console.log(filterdTeam)
    console.log(teamCode)
    if (filterdTeam) {
        res.json(filterdTeam)
    } else {
        res.status(404).json({ error: 'Team not found' })
    }
})

app.get('/teams/allteams', (req,res) => {

    const teamss = teams

    try{
        res.json(teamss)
    }catch(error){
        res.json(error)
    }

})



app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})