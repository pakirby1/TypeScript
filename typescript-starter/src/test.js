const express = require("express");
const axios = require('axios');

// create our express app

const app = express()

let apikey = '8df74dd8ace195f9c3fd7f7ac74a261c'

// create GET route on on express server API

app.get('/', (req, res) => {

    let city = req.query.city;

	axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`)				

		.then((response) => {

			if(response.status === 200) {

				res.send(`The weather in your city "${city}" is ${response.data.list[0].weather[0].description}`)

			}

		})

		.catch((err) => {

			console.log(err);

		})	

})


// listen on port 3000

app.listen(3000, () => console.log("Server running on port 3000"))
