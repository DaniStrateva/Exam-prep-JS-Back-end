import express from 'express';
import routes from './routes.js'


const app = express();

//setup static middleware
app.use(express.static('src/public'));

//use body parser
app.use(express.urlencoded());

//add routes
app.use(routes);



app.listen(3000,()=>console.log('Server is listening on http://localhost:3000'));