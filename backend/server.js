const express = require('express');
const colors = require('colors')
const {chats} = require("./data/data.js")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const {notFound,errorHandler}= require("./middleware/errorMiddleware")
const cors = require('cors');

const app = express();
app.use(cors())

dotenv.config();
app.use(express.json());   // to accept json data
connectDB()



app.get('/',(req,res)=>{
    res.send('API is running')
})


app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold))


