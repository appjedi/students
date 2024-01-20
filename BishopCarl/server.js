const express = require("express");
require("dotenv").config()
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 3000;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);
// SQL Select
const query = async (query, values) => {
  const results = await sequelize.query(query, {
    replacements: values, type: sequelize.QueryTypes.SELECT
  });
  console.log(results);
  return results;
}

// SQL Insert, Update, Delete
const execute = async (query, values) => {
  try {
    const results = await sequelize.query(query, {
      replacements: values
    });
    return results;
  } catch (ex) {
    console.log("ERROR:", ex);
    return { status: -1, message: "Failed" }
  }
}


const app = express();
app.use(session({ secret: 'XASDASDA' }));

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

const GC_PUBLIC_DIR = path.join(__dirname + '/public/index.html').split("/index.html")[0];

let ssn;
const GC_RELEASE = "2024-01-19";
app.get("/", (req, res) => {
  //ssn = req.session;
  console.log("root");
  res.send(GC_RELEASE);
});
app.get("/release", (req, res) => {
  ssn = req.session;
  //res.sendFile(GC_PUBLIC_DIR + "/contactus.html");
  res.send(GC_RELEASE);
});
app.get("/dashboard", (req, res) => {
  ssn = req.session;
  if (ssn['user'] === undefined) {
    res.redirect("/login?msg=Please login");
  }
  res.sendFile(GC_PUBLIC_DIR + "/dashboard.html");
});

app.get('/login', (req, res) => {
  const msg = req.query['msg'] == undefined ? "" : req.query['msg'];

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
  const auth = await login(username, password);
  console.log("AUTH", auth);
  if (auth.userId > 0) {
    ssn = req.session;
    ssn.user = auth;
    res.sendFile(GC_PUBLIC_DIR + "/dashboard.html");

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
    <br>Password:<br><input type="password" name="password">
    <br><br><input type="submit" value="Submit"></form></body></html>`;

  res.send(form);

});
app.post('/register', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("/register:", username);
  const userId = await register(username, password);
  if (userId > 0) {
    const user = await login(username, password);
    ssn = req.session;
    ssn.user = user;
    res.send({ user: user });

  } else {
    res.redirect("/login");
  }
});
app.get("/contactus", async (req, res) => {
  res.sendFile(GC_PUBLIC_DIR + "/contactus.html");

})
app.post("/contactus", async (req, res) => {
  const data = {
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  }
  console.log(data);
  const id = await contactus(data);

  res.send({ status: id });
});
async function login(u, p) {
  try {
    const select = `SELECT * FROM users WHERE username=? AND password= ?`;
    console.log("LOGIN:", select);
    const results = await query(select, [u, p]);
    console.log(results.length);
    if (results.length > 0) {
      const user = results[0];
      user.password = "********";
      return user;
    } else {
      return { id: 0, username: u, status: -1, role_id: -1 }
    }
  } catch (e) {
    console.log("ERROR:", e);
    return null;
  }
}
async function register(u, p) {
  try {
    const insert = `INSERT INTO users (username, password, role_id, status, created) VALUES(?,?,1,1,SYSDATE())`;
    console.log("LOGIN:", insert);
    const results = await execute(insert, [u, p]);
    console.log(results);
    return results[0];
  } catch (e) {
    console.log("ERROR:", e);
    return -1;
  }
}
async function contactus(data) {
  try {
    const insert = `INSERT INTO contact_us (fullName, email, phone, message, received) VALUES(?,?,?,?,SYSDATE())`;
    console.log("LOGIN:", insert);
    const values = [data.fullName, data.email, data.phone, data.message];
    console.log("VALUES", values);
    const results = await execute(insert, values);
    console.log(results);
    return results[0];
  } catch (e) {
    console.log("ERROR:", e);
    return -1;
  }
}
app.get("/user/logout", (req, res) => {

  //  ssn=req.session;
  ssn.user = undefined;
  ssn.token = undefined;
  res.send("logged out");
});
app.get("/user", (req, res) => {
  ssn = req.session;
  res.send(ssn.user);
});
app.get("/dbtest", async (req, res) => {
  console.log("dbtest");
  const results = await query('SELECT * FROM users');

  res.send(results);
});

app.listen(port, () => {
  console.log("listening on port:", port);
});
