const path = require('path');
const express = require('express');
const session = require('express-session');

const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'when doves cry',
  cookie:{
  //session will end in 15 minutes
  expires: 15 * 60 * 1000
},

resave: true,
rolling: true,
saveUninitialized: true,
store: new SequelizeStore({
  db: sequelize
})
};
app.use(session(sess));

//Tell express which template to use

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
  extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//start the connection to the db and server 

  app.listen(PORT, () => {
  console.log('Now Listening!');
  sequelize.sync({ force: false })
});

