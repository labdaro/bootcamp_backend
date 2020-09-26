const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const posts = require('./routes/api/tasklist')
app.use('/api/posts',posts )


//MiddleWare 
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server running on ${port}`))