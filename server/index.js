const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())



const PORT = 3002

app.get('/', (req, res) => {
    res.send('Hello worlds')
})

app.listen(PORT, () => 
    console.log(`Server is running at port ${PORT}`)
)