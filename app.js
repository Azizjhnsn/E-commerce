const express = require('express');
const dotENV = require('dotenv');
const {adminRoute} = require('./routes');
const expressEjsLayouts = require('express-ejs-layouts')
// Configure Environnement
dotENV.config()

const PORT = process.env.SERVER_PORT || 3465

const app = express();

//serve static files 
app.use(express.static(__dirname+'/public'));

//setting view engine
app.set('view engine','ejs');
app.use(expressEjsLayouts);
app.set('layout','pages/admin/layouts/master')

app.use('/admin', adminRoute);



app.listen(PORT,()=>{
    console.log(`server is running on port http://127.0.0.1:${PORT}`);
})
