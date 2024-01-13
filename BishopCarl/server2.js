require("dotenv").config()
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb'); // or ObjectID const path = require('path');
const bodyParser = require('body-parser');
const express = require("express");
const session = require('express-session');
const mongoLocalURL = "mongodb://localhost:27017";
const client = new MongoClient(mongoLocalURL);
const path = require('path');

const getCollection = async(collectionName)=> {
  let conn;
  try {
    conn = await client.connect();
    console.log("connected");
    const db =  conn.db("local");
    return db.collection(collectionName);
  } catch (e) {
    console.error(e);
    return null;
  }
}

const port = 2024;

const app = express();
app.use(session({ secret: 'XASDASDA' }));

const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const GC_PUBLIC_DIR = path.join(__dirname + '/public/index.html').split("/index.html")[0];


let ssn;
const GC_RELEASE = "2024-01-05";
app.get("/", (req, res) => {
    //ssn = req.session;
    console.log("root");
  res.send(GC_RELEASE);
});
app.get("/release", (req, res) => {
  ssn = req.session;
  res.send(GC_RELEASE);
});

app.get('/login', (req, res) => {
    const msg = req.query['msg']==undefined?"":req.query['msg'];

  const form =
    `<html><head><title>login</title></head><body><h3>${msg}
   <h1>Login Page </h1><p>${GC_RELEASE}</p>
   <form method="POST" action="/login">
    Username:<br><input type="text" name="username">
    <br>Password:<br><input type="text" name="password">
    <br><br><input type="submit" value="Submit"></form></body></html>`;

  res.send(form);

});
app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("/login:", username);
  const auth =await login(username, password);
  if (auth!==null) {
    ssn = req.session;
    ssn.user = auth;
    res.send({ auth: auth });

  } else {
      res.redirect("/login?msg=Failed login");
  }
});
app.get('/register', (req, res) => {
  const form =
    `<html><head><title>login</title></head><body>
   <h1>Login Page </h1><p>${GC_RELEASE}</p>
   <form method="POST" action="/register">
    Username:<br><input type="text" name="username">
    <br>Password:<br><input type="text" name="password">
    <br><br><input type="submit" value="Submit"></form></body></html>`;

  res.send(form);

});
app.post('/register', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("/register:", username);
  const auth =await register(username, password);
  if (auth.id>0) {
    ssn = req.session;
    ssn.user = auth;
    res.send({ auth: auth });

  } else {
      res.redirect("/login");
  }
});

async function login(u, p) {
  try {
    const doc = await getCollection("users");
    const query = { username: u };
    console.log("login:", query)

    const user = await doc.findOne(query);
    console.log(user);
    if (user.password === p)
    {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    console.log("ERROR:", e);
    return null;
  }
}
async function register(u, p) {
  try {
    const dt = new Date()
    const user = {username:u, password:p, roleId:1, status:1, created:dt}
    console.log("register:", user);
    const doc = await getCollection("users");
    doc.insertOne(user);
      return {status:1, message:"created"};
  } catch (e) {
    console.log("ERROR:", e);
    return null;
  }
}
app.get("/user/logout", (req, res) => {

  //  ssn=req.session;
  ssn.userId = undefined;
  ssn.token = undefined;
  res.send("logged out");
});
app.get("/user", (req, res) => {
  ssn = req.session;
  res.send(ssn.user);
});
app.get("/dbtest", async (req, res) => {
  console.log("dbtest");
  const doc = await getCollection("users");
  const users = await doc.find({}).toArray();
  console.log(users);
  res.send(users);
});

app.listen(port, () => {
  console.log("listening on port:", port);
});
