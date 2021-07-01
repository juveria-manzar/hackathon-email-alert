const puppeteer = require("puppeteer");
const writeFileSync = require("fs").writeFileSync;

let allUpcomingHackathons=[]

module.exports.main = async function () {
  try {
    const browser = await puppeteer.launch({
      headless:true,
      defaultViewport: null,
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    const page = await browser.newPage();
    await page.goto("https://devfolio.co/hackathons?hackathon_type%3Din_person%2Conline%26time_frame%3Dapplication_open");

    allUpcomingHackathons = await page.evaluate(getAllHackathons);
    await writeToJson(allUpcomingHackathons)
    console.table(allUpcomingHackathons);
  }
  catch (err) {
    console.log(err);
  }
}

async function getAllHackathons() {
  let allHackathons = [];
  let resultList = document.querySelectorAll(".style__Inner-sc-19afmba-7.jcKWGN");
  let dateInc = 0;

  for (let index = 0; index < resultList.length; index++) {
    let link = document.querySelectorAll(".style__Flex-sc-19afmba-5.gwHgou a")[index].getAttribute('href')
    let name = document.querySelectorAll(".sc-fzqNJr.kwhLPe")[index].innerText;
    let startDate = document.querySelectorAll(".sc-fzqNJr.esEXVk")[dateInc].innerText;
    let endDate = document.querySelectorAll(".sc-fzqNJr.esEXVk")[dateInc + 1].innerText;
    dateInc += 2;

    let obj = { name, link, startDate, endDate }
    allHackathons.push(obj);
  }
  console.table(allHackathons);
  return allHackathons;
}

async function writeToJson(upcomingHackathons) {
  writeFileSync("hackathons.json", JSON.stringify(upcomingHackathons));
}

module.exports.getHackathons = () => allUpcomingHackathons;

module.exports.main();