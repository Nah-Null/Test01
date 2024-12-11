const express = require('express');
const app = express();
const axios = require('axios');

app.get('/kanye', async (req, res) => {
   try {
       const url = 'https://api.kanye.rest/'; 
       const response = await axios.get(url);
       res.json(response.data); // Send the fetched data as a response
   } catch (error) {
       res.status(500).send('Error fetching data');
   }
});



app.listen(4000,() =>{
    console.log("\n Server start on port 3000 (Have Fun) \n")
})
