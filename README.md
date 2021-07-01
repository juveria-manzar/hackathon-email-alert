# Hackathon Email Alert

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=102)](https://github.com/git-shashwat/Open-Chat-Rooms)  &nbsp;&nbsp;
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/git-shashwat/Open-Chat-Rooms)  &nbsp;&nbsp;
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/juveria-manzar/hackathon-email-alert)

Eager to participate in Hackathons, but you often miss opportunities. Not a problem anymore. HackAlerts got you covered.

# Features
- Scrapes upcoming hackathons from [Devfolio](https://devfolio.co/) every week.
- Send an alert to your email id.

# How to use?
- `git clone https://github.com/DZuz14/puppeteer-scraper.git`
- `cd puppeteer-scraper`
- `npm i`
-  Create a `config.js` file within the root folder. Before entering your private information, please make sure the `config.js` files is included in the `.gitignore` file. 
-  In the `config.js` add your gmail address and password.

   ```javascript
   module.exports = {
        auth:{
          user: "user@mail.com",
          password: "password"
        }
    };
   ```
- `npm start`

# Tech Used
- Puppeteer for automation
- NodeJS
- Express for the server
- Cron
- Nodemailer
