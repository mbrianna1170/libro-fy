const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// connect to port
const app = express();
const PORT = process.env.PORT || 3001;

// JWT Const
// const jwt = require("jsonwebtoken");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// cookies
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// turn on session
app.use(session(sess));
const posts = [
  {
    username: "",
    title: "Post 1",
  },
  {
    username: "",
    title: "Post 2",
  },
];

//JWT GET Route
// app.get("/posts", authenticateToken, (req, res) => {
//   res.json(posts.filter(post.username === req.user.name));
// });

// Token Authentication
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     console.log(err)
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }

// sets up handlebars as apps template engine
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//turn on routes
const routes = require("./controllers");
app.use(routes);

// sync sequelize models to the database, then turn on the server
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
