
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/index');


const app = express()
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({   
     origin:process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())

app.use("/api",router)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });




const PORT = process.env.PORT || 8080;


connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log(`Server is running on port ${PORT}`);
    });
})

