import express from 'express';
import handlebars from 'express-handlebars';
import initDatabase from './config/dbConfig.js';
import routes from './routes.js';


//init express
const app = express();

//init database
initDatabase();

//setup static middleware
app.use(express.static('src/public'));

//use body parser
app.use(express.urlencoded());

//configure handlebars as view engine
app.engine('hbs',handlebars.engine({
    extname:'hbs',
    runtimeOptions:{
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    }
}))

//set handlebars as default engine
app.set('view engine', 'hbs');

//change default views directory
app.set('views','src/views');

//add routes
app.use(routes);


app.listen(3000,()=>console.log('Server is listening on http://localhost:3000'));