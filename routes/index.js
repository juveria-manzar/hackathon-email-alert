const express = require('express');

const router = express.Router();
const hackathonScraper = require("../scraper");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hackathons", (req, res, next) => {
  res.render("index", {
    hackathons: hackathonScraper.getHackathons()
  });
});


module.exports = router;
