const express = require("express");
const routes = express.Router();
const views = __dirname + "/views";

const profile = {
    name: "Tiago",
    avatar: "https://avatars.githubusercontent.com/u/16553185?s=60&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hous-per-day": 6,
    "vocation-per-year": 4
}

// Routes (Request / Response)
routes.get('/', (req, res) => res.render(views + "/index"))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.get('/job/edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile", { profile }))

module.exports = routes;