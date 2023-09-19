const express = require('express');
const dotENV = require('dotenv');
const {adminRoute} = require('./routes');

// Configure Environnement
dotENV.config()

const PORT = process.env.SERVER_PORT || 3465

const app = express();
app.use('/admin', adminRoute);



app.listen(PORT,()=>{
    console.log(`server is running on port http://127.0.0.1:${PORT}`);
})
