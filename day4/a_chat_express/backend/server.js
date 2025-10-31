const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')


const app = express();

app.use(cors())
app.use(express.json())


const ApiKey = 'paste your api key'
const ApiUrl = "https://openrouter.ai/api/v1/chat/completions"

app.post('/api/chat',async (req,res)=>{
    try {
        const message  = req.body.message || 'hello';

        let response = await fetch(ApiUrl, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${ApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'tngtech/deepseek-r1t2-chimera:free',
              messages: [
                {
                  role: 'user',
                  content: message,
                },
              ],
              stream : false
            }),
          });
    
        let data = await response.json();
        // console.log(data);
        const apiRepy =  data.choices[0].message.content;
        res.json({reply : apiRepy})

    } catch (error) {
        console.error(error);
        res.status(500).json({reply : "error in fetching data from api"})
        
    }
})


app.listen(3001, ()=>{
    console.log("server is running on port 3001")
})