const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const tasklist = require('./routes/api/tasklist')
app.use('/api/tasklist',tasklist )



//MiddleWare 

const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server running on ${port}`))