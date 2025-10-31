const express = require('express')
const cors = require('cors')

let app = express();

app.use(express.json());
app.use(cors())


app.get('/message',(req,res)=>{
    // res.send('hello to all kvs students who learn backend')
    res.json({message : "hello this is from backend"})
})


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})