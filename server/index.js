const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const userRoute = require('./routes/userRoute')
const dotenv = require("dotenv");

dotenv.config();
// require('dotenv').config()


const app = express()

let URI = process.env.URI
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log('MongoDB connected');
  }).on('error', function(error){
 console.log('error')
  })

// mongoose.connect (process.env.URI, {
    
// })


app.use(morgan('common'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json());

//Routes
app.use('/api/users',userRoute)

app.get('/', (req,res) => {
    res.send('hello world')
})


const port = process.env.PORT || 8000
app.listen(port, () => {
console.log(`listening on http://localhost:${port}`)
})