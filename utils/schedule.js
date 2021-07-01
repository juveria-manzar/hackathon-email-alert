const { CronJob } = require("cron");

const hackathonScraper = require("../scraper/index");
const Email=require('./email')

console.log("Scheduler Started");
// At 09:30 on Monday-> 30 9 * * 1
const fetchUpcomingHackathons = new CronJob("* * * * *", async () => {
  console.log("Fetching Upcoming Hackathons...");
  await Email.send()
  await hackathonScraper.main();
});
fetchUpcomingHackathons.start();