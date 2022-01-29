const express = require('express')
const cors = require('cors')

const app = express();

var corOptions = {
    origin: 'https://localhost:8081'

}


//middlewire 
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routers
const router = require('./routes/propertyRoute.js');
app.use('/api/properties', router)

//Static Image Folder

app.use('/Images', express.static('./Images'))


//test PAI
app.get('/', (req, res)=>{
    res.json({message: 'hello from mysql API'})
})

//PORT
const PORT = process.env.PORT || 8080

//Server
app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})
