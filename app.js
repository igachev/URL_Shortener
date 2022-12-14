let express = require('express')
let ShortUrl = require('./models/ShortUrl')
let app = express()

const indexRouter = require('./routes/index')

app.use(express.static('public'))

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection

db.on('error',(error) => console.log(error))
db.once('open',() => console.log('connected to database'))

app.use(express.json())
app.use('/',indexRouter)



app.listen(process.env.PORT || 5000,() => {
    console.log('server started...');
})